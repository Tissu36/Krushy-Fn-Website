// Server-side proxy: keeps the season catalog available when the upstream API does not enable browser CORS.
const URL='https://prod.fn-api.cc/v1/seasons';
const isUrl=s=>typeof s==='string'&&/^https:\/\//i.test(s);
function findArt(row){
 const direct=[row?.keyArt,row?.keyart,row?.key_art,row?.keyArtUrl,row?.keyartUrl,row?.artwork,row?.image,row?.images?.keyArt,row?.images?.keyart,row?.images?.cover,row?.media?.keyArt,row?.assets?.keyArt];
 for(const v of direct){if(isUrl(v))return v;if(v&&typeof v==='object')for(const u of [v.url,v.src,v.image,v.large,v.full])if(isUrl(u))return u}
 const found=[];
 function walk(obj,path='',depth=0){if(depth>4||!obj||typeof obj!=='object')return;for(const [k,v] of Object.entries(obj)){const next=path+'.'+k;if(isUrl(v)&&/key.?art|cover|promo|splash|artwork|image/i.test(next)&&/\.(png|jpe?g|webp)(\?|$)|cdn|image|media/i.test(v))found.push({url:v,rank:/key.?art/i.test(next)?0:/cover|promo|artwork/i.test(next)?1:2});else if(v&&typeof v==='object')walk(v,next,depth+1)}}
 walk(row);found.sort((a,b)=>a.rank-b.rank);return found[0]?.url||null
}
function list(payload){if(Array.isArray(payload))return payload;for(const v of [payload?.data,payload?.seasons,payload?.result,payload?.data?.seasons,payload?.items])if(Array.isArray(v))return v;return []}
export default async function handler(req,res){
 res.setHeader('Cache-Control','s-maxage=3600, stale-while-revalidate=86400');
 try{const response=await fetch(URL,{headers:{Accept:'application/json'},signal:AbortSignal.timeout(12000)});if(!response.ok)throw Error('upstream '+response.status);const rows=list(await response.json());if(!rows.length)throw Error('empty upstream');
 const seasons=rows.map((row,i)=>({number:Number(row?.number??row?.seasonNumber??row?.season?.number??row?.season??row?.id)||i+1,chapter:row?.chapter?.number??row?.chapter??null,name:row?.name??row?.displayName??null,image:findArt(row)}));
 res.status(200).json({seasons,source:'FN Api',count:seasons.filter(x=>x.image).length});
 }catch(e){res.status(502).json({error:'Season artwork service unavailable',details:String(e.message||e)})}
}
