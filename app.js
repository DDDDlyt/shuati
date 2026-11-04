/* ===== pako（gzip）：给不支持 CompressionStream 的微信内核兜底 ===== */
(function(e,t){typeof exports==`object`&&typeof module<`u`?t(exports):typeof define==`function`&&define.amd?define([`exports`],t):(e=typeof globalThis<`u`?globalThis:e||self,t(e.pako={}))})(this,function(e){Object.defineProperty(e,Symbol.toStringTag,{value:`Module`});var t=4,n=0,r=1,i=2;function a(e){let t=e.length;for(;--t>=0;)e[t]=0}var o=0,s=1,c=2,l=29,u=256,d=286,f=30,p=19,m=573,h=15,g=16,_=7,v=256,y=16,b=17,x=18,S=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),C=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),w=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),T=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),E=512,D=Array(288*2);a(D);var O=Array(f*2);a(O);var k=Array(E);a(k);var A=Array(256);a(A);var j=Array(l);a(j);var ee=Array(f);a(ee);var te=class{constructor(e,t,n,r,i){this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=e&&e.length}},ne,re,ie,ae=class{constructor(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}},oe=e=>e<256?k[e]:k[256+(e>>>7)],se=(e,t)=>{e.pending_buf[e.pending++]=t&255,e.pending_buf[e.pending++]=t>>>8&255},M=(e,t,n)=>{e.bi_valid>g-n?(e.bi_buf|=t<<e.bi_valid&65535,se(e,e.bi_buf),e.bi_buf=t>>g-e.bi_valid,e.bi_valid+=n-g):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=n)},N=(e,t,n)=>{M(e,n[t*2],n[t*2+1])},ce=(e,t)=>{let n=0;do n|=e&1,e>>>=1,n<<=1;while(--t>0);return n>>>1},le=e=>{e.bi_valid===16?(se(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=e.bi_buf&255,e.bi_buf>>=8,e.bi_valid-=8)},ue=(e,t)=>{let n=t.dyn_tree,r=t.max_code,i=t.stat_desc.static_tree,a=t.stat_desc.has_stree,o=t.stat_desc.extra_bits,s=t.stat_desc.extra_base,c=t.stat_desc.max_length,l,u,d,f,p,g,_=0;for(f=0;f<=h;f++)e.bl_count[f]=0;for(n[e.heap[e.heap_max]*2+1]=0,l=e.heap_max+1;l<m;l++)u=e.heap[l],f=n[n[u*2+1]*2+1]+1,f>c&&(f=c,_++),n[u*2+1]=f,!(u>r)&&(e.bl_count[f]++,p=0,u>=s&&(p=o[u-s]),g=n[u*2],e.opt_len+=g*(f+p),a&&(e.static_len+=g*(i[u*2+1]+p)));if(_!==0){do{for(f=c-1;e.bl_count[f]===0;)f--;e.bl_count[f]--,e.bl_count[f+1]+=2,e.bl_count[c]--,_-=2}while(_>0);for(f=c;f!==0;f--)for(u=e.bl_count[f];u!==0;)d=e.heap[--l],!(d>r)&&(n[d*2+1]!==f&&(e.opt_len+=(f-n[d*2+1])*n[d*2],n[d*2+1]=f),u--)}},de=(e,t,n)=>{let r=Array(16),i=0,a,o;for(a=1;a<=h;a++)i=i+n[a-1]<<1,r[a]=i;for(o=0;o<=t;o++){let t=e[o*2+1];t!==0&&(e[o*2]=ce(r[t]++,t))}},fe=()=>{let e,t,n,r,i,a=Array(16);for(n=0,r=0;r<l-1;r++)for(j[r]=n,e=0;e<1<<S[r];e++)A[n++]=r;for(A[n-1]=r,i=0,r=0;r<16;r++)for(ee[r]=i,e=0;e<1<<C[r];e++)k[i++]=r;for(i>>=7;r<f;r++)for(ee[r]=i<<7,e=0;e<1<<C[r]-7;e++)k[256+i++]=r;for(t=0;t<=h;t++)a[t]=0;for(e=0;e<=143;)D[e*2+1]=8,e++,a[8]++;for(;e<=255;)D[e*2+1]=9,e++,a[9]++;for(;e<=279;)D[e*2+1]=7,e++,a[7]++;for(;e<=287;)D[e*2+1]=8,e++,a[8]++;for(de(D,287,a),e=0;e<f;e++)O[e*2+1]=5,O[e*2]=ce(e,5);ne=new te(D,S,257,d,h),re=new te(O,C,0,f,h),ie=new te([],w,0,p,_)},pe=e=>{let t;for(t=0;t<d;t++)e.dyn_ltree[t*2]=0;for(t=0;t<f;t++)e.dyn_dtree[t*2]=0;for(t=0;t<p;t++)e.bl_tree[t*2]=0;e.dyn_ltree[v*2]=1,e.opt_len=e.static_len=0,e.sym_next=e.matches=0},me=e=>{e.bi_valid>8?se(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0},he=(e,t,n,r)=>{let i=t*2,a=n*2;return e[i]<e[a]||e[i]===e[a]&&r[t]<=r[n]},ge=(e,t,n)=>{let r=e.heap[n],i=n<<1;for(;i<=e.heap_len&&(i<e.heap_len&&he(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!he(t,r,e.heap[i],e.depth));)e.heap[n]=e.heap[i],n=i,i<<=1;e.heap[n]=r},_e=(e,t,n)=>{let r,i,a=0,o,s;if(e.sym_next!==0)do r=e.pending_buf[e.sym_buf+a++]&255,r+=(e.pending_buf[e.sym_buf+a++]&255)<<8,i=e.pending_buf[e.sym_buf+a++],r===0?N(e,i,t):(o=A[i],N(e,o+u+1,t),s=S[o],s!==0&&(i-=j[o],M(e,i,s)),r--,o=oe(r),N(e,o,n),s=C[o],s!==0&&(r-=ee[o],M(e,r,s)));while(a<e.sym_next);N(e,v,t)},ve=(e,t)=>{let n=t.dyn_tree,r=t.stat_desc.static_tree,i=t.stat_desc.has_stree,a=t.stat_desc.elems,o,s,c=-1,l;for(e.heap_len=0,e.heap_max=m,o=0;o<a;o++)n[o*2]===0?n[o*2+1]=0:(e.heap[++e.heap_len]=c=o,e.depth[o]=0);for(;e.heap_len<2;)l=e.heap[++e.heap_len]=c<2?++c:0,n[l*2]=1,e.depth[l]=0,e.opt_len--,i&&(e.static_len-=r[l*2+1]);for(t.max_code=c,o=e.heap_len>>1;o>=1;o--)ge(e,n,o);l=a;do o=e.heap[1],e.heap[1]=e.heap[e.heap_len--],ge(e,n,1),s=e.heap[1],e.heap[--e.heap_max]=o,e.heap[--e.heap_max]=s,n[l*2]=n[o*2]+n[s*2],e.depth[l]=(e.depth[o]>=e.depth[s]?e.depth[o]:e.depth[s])+1,n[o*2+1]=n[s*2+1]=l,e.heap[1]=l++,ge(e,n,1);while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],ue(e,t),de(n,c,e.bl_count)},ye=(e,t,n)=>{let r,i=-1,a,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),t[(n+1)*2+1]=65535,r=0;r<=n;r++)a=o,o=t[(r+1)*2+1],!(++s<c&&a===o)&&(s<l?e.bl_tree[a*2]+=s:a===0?s<=10?e.bl_tree[b*2]++:e.bl_tree[x*2]++:(a!==i&&e.bl_tree[a*2]++,e.bl_tree[y*2]++),s=0,i=a,o===0?(c=138,l=3):a===o?(c=6,l=3):(c=7,l=4))},be=(e,t,n)=>{let r,i=-1,a,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),r=0;r<=n;r++)if(a=o,o=t[(r+1)*2+1],!(++s<c&&a===o)){if(s<l)do N(e,a,e.bl_tree);while(--s!==0);else a===0?s<=10?(N(e,b,e.bl_tree),M(e,s-3,3)):(N(e,x,e.bl_tree),M(e,s-11,7)):(a!==i&&(N(e,a,e.bl_tree),s--),N(e,y,e.bl_tree),M(e,s-3,2));s=0,i=a,o===0?(c=138,l=3):a===o?(c=6,l=3):(c=7,l=4)}},xe=e=>{let t;for(ye(e,e.dyn_ltree,e.l_desc.max_code),ye(e,e.dyn_dtree,e.d_desc.max_code),ve(e,e.bl_desc),t=p-1;t>=3&&e.bl_tree[T[t]*2+1]===0;t--);return e.opt_len+=3*(t+1)+5+5+4,t},Se=(e,t,n,r)=>{let i;for(M(e,t-257,5),M(e,n-1,5),M(e,r-4,4),i=0;i<r;i++)M(e,e.bl_tree[T[i]*2+1],3);be(e,e.dyn_ltree,t-1),be(e,e.dyn_dtree,n-1)},Ce=e=>{let t=4093624447,i;for(i=0;i<=31;i++,t>>>=1)if(t&1&&e.dyn_ltree[i*2]!==0)return n;if(e.dyn_ltree[18]!==0||e.dyn_ltree[20]!==0||e.dyn_ltree[26]!==0)return r;for(i=32;i<u;i++)if(e.dyn_ltree[i*2]!==0)return r;return n},we=!1,Te=e=>{we||(fe(),we=!0),e.l_desc=new ae(e.dyn_ltree,ne),e.d_desc=new ae(e.dyn_dtree,re),e.bl_desc=new ae(e.bl_tree,ie),e.bi_buf=0,e.bi_valid=0,pe(e)},Ee=(e,t,n,r)=>{M(e,(o<<1)+ +!!r,3),me(e),se(e,n),se(e,~n),n&&e.pending_buf.set(e.window.subarray(t,t+n),e.pending),e.pending+=n},De=e=>{M(e,s<<1,3),N(e,v,D),le(e)},Oe=(e,n,r,a)=>{let o,l,u=0;e.level>0?(e.strm.data_type===i&&(e.strm.data_type=Ce(e)),ve(e,e.l_desc),ve(e,e.d_desc),u=xe(e),o=e.opt_len+3+7>>>3,l=e.static_len+3+7>>>3,(l<=o||e.strategy===t)&&(o=l)):o=l=r+5,r+4<=o&&n!==-1?Ee(e,n,r,a):e.strategy===t||l===o?(M(e,(s<<1)+ +!!a,3),_e(e,D,O)):(M(e,(c<<1)+ +!!a,3),Se(e,e.l_desc.max_code+1,e.d_desc.max_code+1,u+1),_e(e,e.dyn_ltree,e.dyn_dtree)),pe(e),a&&me(e)},P=(e,t,n)=>(e.pending_buf[e.sym_buf+e.sym_next++]=t,e.pending_buf[e.sym_buf+e.sym_next++]=t>>8,e.pending_buf[e.sym_buf+e.sym_next++]=n,t===0?e.dyn_ltree[n*2]++:(e.matches++,t--,e.dyn_ltree[(A[n]+u+1)*2]++,e.dyn_dtree[oe(t)*2]++),e.sym_next===e.sym_end),ke=(e,t,n,r)=>{let i=e&65535|0,a=e>>>16&65535|0,o=0;for(;n!==0;){o=n>2e3?2e3:n,n-=o;do i=i+t[r++]|0,a=a+i|0;while(--o);i%=65521,a%=65521}return i|a<<16|0},Ae=(()=>{let e=new Uint32Array(256*8),t;for(let n=0;n<256;n++){t=n;for(let e=0;e<8;e++)t=t&1?3988292384^t>>>1:t>>>1;e[n]=t}for(let n=0;n<256;n++){t=e[n];for(let r=256;r<256*8;r+=256)t=e[t&255]^t>>>8,e[r+n]=t}return e})(),F=(e,t,n,r)=>{let i=Ae,a=r+n,o=r;e^=-1;for(let n=a-7;o<n;o+=8)e^=t[o]|t[o+1]<<8|t[o+2]<<16|t[o+3]<<24,e=i[1792+(e&255)]^i[1536+(e>>>8&255)]^i[1280+(e>>>16&255)]^i[1024+(e>>>24)]^i[768+t[o+4]]^i[512+t[o+5]]^i[256+t[o+6]]^i[t[o+7]];for(;o<a;o++)e=e>>>8^i[(e^t[o])&255];return e^-1},I={2:`need dictionary`,1:`stream end`,0:``,"-1":`file error`,"-2":`stream error`,"-3":`data error`,"-4":`insufficient memory`,"-5":`buffer error`,"-6":`incompatible version`},je=0,Me=1,Ne=2,Pe=3,Fe=4,Ie=5,Le=6,Re=0,ze=1,Be=2,Ve=-1,He=-2,Ue=-3,We=-4,Ge=-5,Ke=1,qe=2,Je=3,Ye=4,Xe=0,Ze=9,Qe=15,$e=8,et=573,L=3,R=258,z=262,tt=32,nt=42,rt=57,it=69,at=73,ot=91,st=103,B=113,ct=666,V=1,lt=2,H=3,ut=4,dt=3,U=(e,t)=>(e.msg=I[t],t),ft=e=>e*2-(e>4?9:0),W=e=>{let t=e.length;for(;--t>=0;)e[t]=0},pt=e=>{let t,n,r,i=e.w_size;t=e.hash_size,r=t;do n=e.head[--r],e.head[r]=n>=i?n-i:0;while(--t);t=i,r=t;do n=e.prev[--r],e.prev[r]=n>=i?n-i:0;while(--t)},mt=(e,t,n)=>(t<<e.hash_shift^n)&e.hash_mask,G=(e,t)=>{let n;if(e.legacy_hash)n=e.ins_h=mt(e,e.ins_h,e.window[t+L-1]);else{let r=e.window,i=r[t]|r[t+1]<<8|r[t+2]<<16|r[t+3]<<24;n=e.ins_h=Math.imul(i,66521)+66521>>>16&e.hash_mask}let r=e.prev[t&e.w_mask]=e.head[n];return e.head[n]=t,r},K=e=>{let t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),n!==0&&(e.output.set(t.pending_buf.subarray(t.pending_out,t.pending_out+n),e.next_out),e.next_out+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,t.pending===0&&(t.pending_out=0))},q=(e,t)=>{Oe(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,K(e.strm)},J=(e,t)=>{e.pending_buf[e.pending++]=t},ht=(e,t)=>{e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=t&255},gt=(e,t,n,r)=>{let i=e.avail_in;return i>r&&(i=r),i===0?0:(e.avail_in-=i,t.set(e.input.subarray(e.next_in,e.next_in+i),n),e.state.wrap===1?e.adler=ke(e.adler,t,i,n):e.state.wrap===2&&(e.adler=F(e.adler,t,i,n)),e.next_in+=i,e.total_in+=i,i)},_t=(e,t)=>{let n=e.max_chain_length,r=e.strstart,i,a,o=e.prev_length,s=e.nice_match,c=e.strstart>e.w_size-z?e.strstart-(e.w_size-z):0,l=e.window,u=e.w_mask,d=e.prev,f=e.strstart+R,p=l[r+o-1],m=l[r+o];e.prev_length>=e.good_match&&(n>>=2),s>e.lookahead&&(s=e.lookahead);do{if(i=t,l[i+o]!==m||l[i+o-1]!==p||l[i]!==l[r]||l[++i]!==l[r+1])continue;r+=2,i++;do;while(l[++r]===l[++i]&&l[++r]===l[++i]&&l[++r]===l[++i]&&l[++r]===l[++i]&&l[++r]===l[++i]&&l[++r]===l[++i]&&l[++r]===l[++i]&&l[++r]===l[++i]&&r<f);if(a=R-(f-r),r=f-R,a>o){if(e.match_start=t,o=a,a>=s)break;p=l[r+o-1],m=l[r+o]}}while((t=d[t&u])>c&&--n!==0);return o<=e.lookahead?o:e.lookahead},vt=e=>{let t=e.w_size,n,r,i;do{if(r=e.window_size-e.lookahead-e.strstart,e.strstart>=t+(t-z)&&(e.window.set(e.window.subarray(t,t+t-r),0),e.match_start-=t,e.strstart-=t,e.block_start-=t,e.insert>e.strstart&&(e.insert=e.strstart),pt(e),r+=t),e.strm.avail_in===0)break;if(n=gt(e.strm,e.window,e.strstart+e.lookahead,r),e.lookahead+=n,!e.legacy_hash){if(e.lookahead+e.insert>L)for(i=e.strstart-e.insert;e.insert&&(G(e,i),i++,e.insert--,!(e.lookahead+e.insert<=L)););}else if(e.lookahead+e.insert>=L)for(i=e.strstart-e.insert,e.ins_h=e.window[i],e.ins_h=mt(e,e.ins_h,e.window[i+1]);e.insert&&(G(e,i),i++,e.insert--,!(e.lookahead+e.insert<L)););}while(e.lookahead<z&&e.strm.avail_in!==0)},yt=(e,t)=>{let n=e.pending_buf_size-5>e.w_size?e.w_size:e.pending_buf_size-5,r,i,a,o=0,s=e.strm.avail_in;do{if(r=65535,a=e.bi_valid+42>>3,e.strm.avail_out<a||(a=e.strm.avail_out-a,i=e.strstart-e.block_start,r>i+e.strm.avail_in&&(r=i+e.strm.avail_in),r>a&&(r=a),r<n&&(r===0&&t!==4||t===0||r!==i+e.strm.avail_in)))break;o=+(t===4&&r===i+e.strm.avail_in),Ee(e,0,0,o),e.pending_buf[e.pending-4]=r,e.pending_buf[e.pending-3]=r>>8,e.pending_buf[e.pending-2]=~r,e.pending_buf[e.pending-1]=~r>>8,K(e.strm),i&&(i>r&&(i=r),e.strm.output.set(e.window.subarray(e.block_start,e.block_start+i),e.strm.next_out),e.strm.next_out+=i,e.strm.avail_out-=i,e.strm.total_out+=i,e.block_start+=i,r-=i),r&&(gt(e.strm,e.strm.output,e.strm.next_out,r),e.strm.next_out+=r,e.strm.avail_out-=r,e.strm.total_out+=r)}while(o===0);return s-=e.strm.avail_in,s&&(s>=e.w_size?(e.matches=2,e.window.set(e.strm.input.subarray(e.strm.next_in-e.w_size,e.strm.next_in),0),e.strstart=e.w_size,e.insert=e.strstart):(e.window_size-e.strstart<=s&&(e.strstart-=e.w_size,e.window.set(e.window.subarray(e.w_size,e.w_size+e.strstart),0),e.matches<2&&e.matches++,e.insert>e.strstart&&(e.insert=e.strstart)),e.window.set(e.strm.input.subarray(e.strm.next_in-s,e.strm.next_in),e.strstart),e.strstart+=s,e.insert+=s>e.w_size-e.insert?e.w_size-e.insert:s),e.block_start=e.strstart),e.high_water<e.strstart&&(e.high_water=e.strstart),o?ut:t!==0&&t!==4&&e.strm.avail_in===0&&e.strstart===e.block_start?lt:(a=e.window_size-e.strstart,e.strm.avail_in>a&&e.block_start>=e.w_size&&(e.block_start-=e.w_size,e.strstart-=e.w_size,e.window.set(e.window.subarray(e.w_size,e.w_size+e.strstart),0),e.matches<2&&e.matches++,a+=e.w_size,e.insert>e.strstart&&(e.insert=e.strstart)),a>e.strm.avail_in&&(a=e.strm.avail_in),a&&(gt(e.strm,e.window,e.strstart,a),e.strstart+=a,e.insert+=a>e.w_size-e.insert?e.w_size-e.insert:a),e.high_water<e.strstart&&(e.high_water=e.strstart),a=e.bi_valid+42>>3,a=e.pending_buf_size-a>65535?65535:e.pending_buf_size-a,n=a>e.w_size?e.w_size:a,i=e.strstart-e.block_start,(i>=n||(i||t===4)&&t!==0&&e.strm.avail_in===0&&i<=a)&&(r=i>a?a:i,o=+(t===4&&e.strm.avail_in===0&&r===i),Ee(e,e.block_start,r,o),e.block_start+=r,K(e.strm)),o?H:V)},bt=(e,t)=>{let n,r;for(;;){if(e.lookahead<z){if(vt(e),e.lookahead<z&&t===0)return V;if(e.lookahead===0)break}if(n=0,e.lookahead>=L&&(n=G(e,e.strstart)),n!==0&&e.strstart-n<=e.w_size-z&&(e.match_length=_t(e,n)),e.match_length>=L)if(r=P(e,e.strstart-e.match_start,e.match_length-L),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=L){e.match_length--;do e.strstart++,n=G(e,e.strstart);while(--e.match_length!==0);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.legacy_hash&&(e.ins_h=e.window[e.strstart],e.ins_h=mt(e,e.ins_h,e.window[e.strstart+1]));else r=P(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(q(e,!1),e.strm.avail_out===0))return V}return e.insert=e.strstart<L-1?e.strstart:L-1,t===4?(q(e,!0),e.strm.avail_out===0?H:ut):e.sym_next&&(q(e,!1),e.strm.avail_out===0)?V:lt},xt=(e,t)=>{let n,r,i;for(;;){if(e.lookahead<z){if(vt(e),e.lookahead<z&&t===0)return V;if(e.lookahead===0)break}if(n=0,e.lookahead>=L&&(n=G(e,e.strstart)),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=L-1,n!==0&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-z&&(e.match_length=_t(e,n),e.match_length<=5&&(e.strategy===1||e.match_length===L&&e.strstart-e.match_start>4096)&&(e.match_length=L-1)),e.prev_length>=L&&e.match_length<=e.prev_length){i=e.strstart+e.lookahead-L,r=P(e,e.strstart-1-e.prev_match,e.prev_length-L),e.lookahead-=e.prev_length-1,e.prev_length-=2;do++e.strstart<=i&&(n=G(e,e.strstart));while(--e.prev_length!==0);if(e.match_available=0,e.match_length=L-1,e.strstart++,r&&(q(e,!1),e.strm.avail_out===0))return V}else if(e.match_available){if(r=P(e,0,e.window[e.strstart-1]),r&&q(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return V}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(r=P(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<L-1?e.strstart:L-1,t===4?(q(e,!0),e.strm.avail_out===0?H:ut):e.sym_next&&(q(e,!1),e.strm.avail_out===0)?V:lt},St=(e,t)=>{let n,r,i,a,o=e.window;for(;;){if(e.lookahead<=R){if(vt(e),e.lookahead<=R&&t===0)return V;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=L&&e.strstart>0&&(i=e.strstart-1,r=o[i],r===o[++i]&&r===o[++i]&&r===o[++i])){a=e.strstart+R;do;while(r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&i<a);e.match_length=R-(a-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=L?(n=P(e,1,e.match_length-L),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(n=P(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),n&&(q(e,!1),e.strm.avail_out===0))return V}return e.insert=0,t===4?(q(e,!0),e.strm.avail_out===0?H:ut):e.sym_next&&(q(e,!1),e.strm.avail_out===0)?V:lt},Ct=(e,t)=>{let n;for(;;){if(e.lookahead===0&&(vt(e),e.lookahead===0)){if(t===0)return V;break}if(e.match_length=0,n=P(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,n&&(q(e,!1),e.strm.avail_out===0))return V}return e.insert=0,t===4?(q(e,!0),e.strm.avail_out===0?H:ut):e.sym_next&&(q(e,!1),e.strm.avail_out===0)?V:lt},Y=class{constructor(e,t,n,r,i){this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=r,this.func=i}},wt=[new Y(0,0,0,0,yt),new Y(4,4,8,4,bt),new Y(4,5,16,8,bt),new Y(4,6,32,32,bt),new Y(4,4,16,16,xt),new Y(8,16,32,32,xt),new Y(8,16,128,128,xt),new Y(8,32,128,256,xt),new Y(32,128,258,1024,xt),new Y(32,258,258,4096,xt)],Tt=e=>{e.window_size=2*e.w_size,W(e.head),e.max_lazy_match=wt[e.level].max_lazy,e.good_match=wt[e.level].good_length,e.nice_match=wt[e.level].nice_length,e.max_chain_length=wt[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=L-1,e.match_available=0,e.ins_h=0},Et=class{constructor(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.legacy_hash=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(et*2),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),W(this.dyn_ltree),W(this.dyn_dtree),W(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),W(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),W(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}},Dt=e=>{if(!e)return 1;let t=e.state;return+(!t||t.strm!==e||t.status!==nt&&t.status!==rt&&t.status!==it&&t.status!==at&&t.status!==ot&&t.status!==st&&t.status!==B&&t.status!==ct)},Ot=e=>{if(Dt(e))return U(e,-2);e.total_in=e.total_out=0,e.data_type=2;let t=e.state;return t.pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap===2?rt:t.wrap?nt:B,e.adler=t.wrap===2?0:1,t.last_flush=-2,Te(t),0},kt=e=>{let t=Ot(e);return t===0&&Tt(e.state),t},At=(e,t)=>Dt(e)||e.state.wrap!==2?-2:(e.state.gzhead=t,0),jt=(e,t,n,r,i,a,o)=>{if(!e)return-2;let s=1;if(t===-1&&(t=6),r<0?(s=0,r=-r):r>15&&(s=2,r-=16),i<1||i>Ze||n!==8||r<8||r>15||t<0||t>9||a<0||a>4||r===8&&s!==1)return U(e,-2);r===8&&(r=9);let c=new Et;return e.state=c,c.strm=e,c.status=nt,c.wrap=s,c.gzhead=null,c.w_bits=r,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.legacy_hash=+!!o,c.hash_bits=i+7,!c.legacy_hash&&c.hash_bits<15&&(c.hash_bits=15),c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+L-1)/L),c.window=new Uint8Array(c.w_size*2),c.head=new Uint16Array(c.hash_size),c.prev=new Uint16Array(c.w_size),c.lit_bufsize=1<<i+6,c.pending_buf_size=c.lit_bufsize*4,c.pending_buf=new Uint8Array(c.pending_buf_size),c.sym_buf=c.lit_bufsize,c.sym_end=(c.lit_bufsize-1)*3,c.level=t,c.strategy=a,c.method=n,kt(e)},Mt=(e,t)=>jt(e,t,8,Qe,$e,0),Nt=(e,t)=>{if(Dt(e)||t>5||t<0)return e?U(e,-2):-2;let n=e.state;if(!e.output||e.avail_in!==0&&!e.input||n.status===ct&&t!==4)return U(e,e.avail_out===0?-5:-2);let r=n.last_flush;if(n.last_flush=t,n.pending!==0){if(K(e),e.avail_out===0)return n.last_flush=-1,0}else if(e.avail_in===0&&ft(t)<=ft(r)&&t!==4)return U(e,-5);if(n.status===ct&&e.avail_in!==0)return U(e,-5);if(n.status===nt&&n.wrap===0&&(n.status=B),n.status===nt){let t=8+(n.w_bits-8<<4)<<8,r=-1;if(r=n.strategy>=2||n.level<2?0:n.level<6?1:n.level===6?2:3,t|=r<<6,n.strstart!==0&&(t|=tt),t+=31-t%31,ht(n,t),n.strstart!==0&&(ht(n,e.adler>>>16),ht(n,e.adler&65535)),e.adler=1,n.status=B,K(e),n.pending!==0)return n.last_flush=-1,0}if(n.status===rt){if(e.adler=0,J(n,31),J(n,139),J(n,8),n.gzhead)J(n,+!!n.gzhead.text+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),J(n,n.gzhead.time&255),J(n,n.gzhead.time>>8&255),J(n,n.gzhead.time>>16&255),J(n,n.gzhead.time>>24&255),J(n,n.level===9?2:n.strategy>=2||n.level<2?4:0),J(n,n.gzhead.os&255),n.gzhead.extra&&n.gzhead.extra.length&&(J(n,n.gzhead.extra.length&255),J(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=F(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=it;else if(J(n,0),J(n,0),J(n,0),J(n,0),J(n,0),J(n,n.level===9?2:n.strategy>=2||n.level<2?4:0),J(n,dt),n.status=B,K(e),n.pending!==0)return n.last_flush=-1,0}if(n.status===it){if(n.gzhead.extra){let t=n.pending,r=(n.gzhead.extra.length&65535)-n.gzindex;for(;n.pending+r>n.pending_buf_size;){let i=n.pending_buf_size-n.pending;if(n.pending_buf.set(n.gzhead.extra.subarray(n.gzindex,n.gzindex+i),n.pending),n.pending=n.pending_buf_size,n.gzhead.hcrc&&n.pending>t&&(e.adler=F(e.adler,n.pending_buf,n.pending-t,t)),n.gzindex+=i,K(e),n.pending!==0)return n.last_flush=-1,0;t=0,r-=i}let i=new Uint8Array(n.gzhead.extra);n.pending_buf.set(i.subarray(n.gzindex,n.gzindex+r),n.pending),n.pending+=r,n.gzhead.hcrc&&n.pending>t&&(e.adler=F(e.adler,n.pending_buf,n.pending-t,t)),n.gzindex=0}n.status=at}if(n.status===at){if(n.gzhead.name){let t=n.pending,r;do{if(n.pending===n.pending_buf_size){if(n.gzhead.hcrc&&n.pending>t&&(e.adler=F(e.adler,n.pending_buf,n.pending-t,t)),K(e),n.pending!==0)return n.last_flush=-1,0;t=0}r=n.gzindex<n.gzhead.name.length?n.gzhead.name.charCodeAt(n.gzindex++)&255:0,J(n,r)}while(r!==0);n.gzhead.hcrc&&n.pending>t&&(e.adler=F(e.adler,n.pending_buf,n.pending-t,t)),n.gzindex=0}n.status=ot}if(n.status===ot){if(n.gzhead.comment){let t=n.pending,r;do{if(n.pending===n.pending_buf_size){if(n.gzhead.hcrc&&n.pending>t&&(e.adler=F(e.adler,n.pending_buf,n.pending-t,t)),K(e),n.pending!==0)return n.last_flush=-1,0;t=0}r=n.gzindex<n.gzhead.comment.length?n.gzhead.comment.charCodeAt(n.gzindex++)&255:0,J(n,r)}while(r!==0);n.gzhead.hcrc&&n.pending>t&&(e.adler=F(e.adler,n.pending_buf,n.pending-t,t))}n.status=st}if(n.status===st){if(n.gzhead.hcrc){if(n.pending+2>n.pending_buf_size&&(K(e),n.pending!==0))return n.last_flush=-1,0;J(n,e.adler&255),J(n,e.adler>>8&255),e.adler=0}if(n.status=B,K(e),n.pending!==0)return n.last_flush=-1,0}if(e.avail_in!==0||n.lookahead!==0||t!==0&&n.status!==ct){let r=n.level===0?yt(n,t):n.strategy===2?Ct(n,t):n.strategy===3?St(n,t):wt[n.level].func(n,t);if((r===H||r===ut)&&(n.status=ct),r===V||r===H)return e.avail_out===0&&(n.last_flush=-1),0;if(r===lt&&(t===1?De(n):t!==5&&(Ee(n,0,0,!1),t===3&&(W(n.head),n.lookahead===0&&(n.strstart=0,n.block_start=0,n.insert=0))),K(e),e.avail_out===0))return n.last_flush=-1,0}return t===4?n.wrap<=0?1:(n.wrap===2?(J(n,e.adler&255),J(n,e.adler>>8&255),J(n,e.adler>>16&255),J(n,e.adler>>24&255),J(n,e.total_in&255),J(n,e.total_in>>8&255),J(n,e.total_in>>16&255),J(n,e.total_in>>24&255)):(ht(n,e.adler>>>16),ht(n,e.adler&65535)),K(e),n.wrap>0&&(n.wrap=-n.wrap),+(n.pending===0)):0},Pt=e=>{if(Dt(e))return-2;let t=e.state.status;return e.state=null,t===B?U(e,-3):0},Ft=(e,t)=>{let n=t.length;if(Dt(e))return-2;let r=e.state,i=r.wrap;if(i===2||i===1&&r.status!==nt||r.lookahead)return-2;if(i===1&&(e.adler=ke(e.adler,t,n,0)),r.wrap=0,n>=r.w_size){i===0&&(W(r.head),r.strstart=0,r.block_start=0,r.insert=0);let e=new Uint8Array(r.w_size);e.set(t.subarray(n-r.w_size,n),0),t=e,n=r.w_size}let a=e.avail_in,o=e.next_in,s=e.input;for(e.avail_in=n,e.next_in=0,e.input=t,vt(r);r.lookahead>=L;){let e=r.strstart,t=r.lookahead-(L-1);do G(r,e),e++;while(--t);r.strstart=e,r.lookahead=L-1,vt(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=L-1,r.match_available=0,e.next_in=o,e.input=s,e.avail_in=a,r.wrap=i,0},It=16209,Lt=16191;function Rt(e,t){let n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E=e.state;n=e.next_in,w=e.input,r=n+(e.avail_in-5),i=e.next_out,T=e.output,a=i-(t-e.avail_out),o=i+(e.avail_out-257),s=E.dmax,c=E.wsize,l=E.whave,u=E.wnext,d=E.window,f=E.hold,p=E.bits,m=E.lencode,h=E.distcode,g=(1<<E.lenbits)-1,_=(1<<E.distbits)-1;top:do{p<15&&(f+=w[n++]<<p,p+=8,f+=w[n++]<<p,p+=8),v=m[f&g];dolen:for(;;){if(y=v>>>24,f>>>=y,p-=y,y=v>>>16&255,y===0)T[i++]=v&65535;else if(y&16){b=v&65535,y&=15,y&&(p<y&&(f+=w[n++]<<p,p+=8),b+=f&(1<<y)-1,f>>>=y,p-=y),p<15&&(f+=w[n++]<<p,p+=8,f+=w[n++]<<p,p+=8),v=h[f&_];dodist:for(;;){if(y=v>>>24,f>>>=y,p-=y,y=v>>>16&255,y&16){if(x=v&65535,y&=15,p<y&&(f+=w[n++]<<p,p+=8,p<y&&(f+=w[n++]<<p,p+=8)),x+=f&(1<<y)-1,x>s){e.msg=`invalid distance too far back`,E.mode=It;break top}if(f>>>=y,p-=y,y=i-a,x>y){if(y=x-y,y>l&&E.sane){e.msg=`invalid distance too far back`,E.mode=It;break top}if(S=0,C=d,u===0){if(S+=c-y,y<b){b-=y;do T[i++]=d[S++];while(--y);S=i-x,C=T}}else if(u<y){if(S+=c+u-y,y-=u,y<b){b-=y;do T[i++]=d[S++];while(--y);if(S=0,u<b){y=u,b-=y;do T[i++]=d[S++];while(--y);S=i-x,C=T}}}else if(S+=u-y,y<b){b-=y;do T[i++]=d[S++];while(--y);S=i-x,C=T}for(;b>2;)T[i++]=C[S++],T[i++]=C[S++],T[i++]=C[S++],b-=3;b&&(T[i++]=C[S++],b>1&&(T[i++]=C[S++]))}else{S=i-x;do T[i++]=T[S++],T[i++]=T[S++],T[i++]=T[S++],b-=3;while(b>2);b&&(T[i++]=T[S++],b>1&&(T[i++]=T[S++]))}}else if(y&64){e.msg=`invalid distance code`,E.mode=It;break top}else{v=h[(v&65535)+(f&(1<<y)-1)];continue dodist}break}}else if(!(y&64)){v=m[(v&65535)+(f&(1<<y)-1)];continue dolen}else if(y&32){E.mode=Lt;break top}else{e.msg=`invalid literal/length code`,E.mode=It;break top}break}}while(n<r&&i<o);b=p>>3,n-=b,p-=b<<3,f&=(1<<p)-1,e.next_in=n,e.next_out=i,e.avail_in=n<r?5+(r-n):5-(n-r),e.avail_out=i<o?257+(o-i):257-(i-o),E.hold=f,E.bits=p}var zt=15,Bt=852,Vt=592,Ht=0,Ut=1,Wt=2,Gt=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Kt=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,199,75]),qt=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Jt=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Yt=(e,t,n,r,i,a,o,s)=>{let c=s.bits,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y,b,x,S,C,w=null,T,E=new Uint16Array(16),D=new Uint16Array(16),O=null,k,A,j;for(l=0;l<=zt;l++)E[l]=0;for(u=0;u<r;u++)E[t[n+u]]++;for(p=c,f=zt;f>=1&&E[f]===0;f--);if(p>f&&(p=f),f===0)return i[a++]=20971520,i[a++]=20971520,s.bits=1,0;for(d=1;d<f&&E[d]===0;d++);for(p<d&&(p=d),g=1,l=1;l<=zt;l++)if(g<<=1,g-=E[l],g<0)return-1;if(g>0&&(e===Ht||f!==1))return-1;for(D[1]=0,l=1;l<zt;l++)D[l+1]=D[l]+E[l];for(u=0;u<r;u++)t[n+u]!==0&&(o[D[t[n+u]]++]=u);if(e===Ht?(w=O=o,T=20):e===Ut?(w=Gt,O=Kt,T=257):(w=qt,O=Jt,T=0),v=0,u=0,l=d,C=a,m=p,h=0,x=-1,_=1<<p,S=_-1,e===Ut&&_>Bt||e===Wt&&_>Vt)return 1;for(;;){k=l-h,o[u]+1<T?(A=0,j=o[u]):o[u]>=T?(A=O[o[u]-T],j=w[o[u]-T]):(A=96,j=0),y=1<<l-h,b=1<<m,d=b;do b-=y,i[C+(v>>h)+b]=k<<24|A<<16|j|0;while(b!==0);for(y=1<<l-1;v&y;)y>>=1;if(y===0?v=0:(v&=y-1,v+=y),u++,--E[l]===0){if(l===f)break;l=t[n+o[u]]}if(l>p&&(v&S)!==x){for(h===0&&(h=p),C+=d,m=l-h,g=1<<m;m+h<f&&(g-=E[m+h],!(g<=0));)m++,g<<=1;if(_+=1<<m,e===Ut&&_>Bt||e===Wt&&_>Vt)return 1;x=v&S,i[x]=p<<24|m<<16|C-a|0}}return v!==0&&(i[C+v]=l-h<<24|4194304),s.bits=p,0},Xt=0,Zt=1,Qt=2,$t=16180,en=16181,tn=16182,nn=16183,rn=16184,an=16185,on=16186,sn=16187,cn=16188,ln=16189,un=16190,X=16191,dn=16192,fn=16193,pn=16194,mn=16195,hn=16196,gn=16197,_n=16198,vn=16199,yn=16200,bn=16201,xn=16202,Sn=16203,Cn=16204,wn=16205,Tn=16206,En=16207,Dn=16208,Z=16209,On=16210,kn=16211,An=852,jn=592,Mn=15,Nn=e=>(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24),Pn=class{constructor(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}},Q=e=>{if(!e)return 1;let t=e.state;return+(!t||t.strm!==e||t.mode<$t||t.mode>kn)},Fn=e=>{if(Q(e))return-2;let t=e.state;return e.total_in=e.total_out=t.total=0,e.msg=``,t.wrap&&(e.adler=t.wrap&1),t.mode=$t,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(An),t.distcode=t.distdyn=new Int32Array(jn),t.sane=1,t.back=-1,0},In=e=>{if(Q(e))return-2;let t=e.state;return t.wsize=0,t.whave=0,t.wnext=0,Fn(e)},Ln=(e,t)=>{let n;if(Q(e))return-2;let r=e.state;return t<0?(n=0,t=-t):(n=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?-2:(r.window!==null&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,In(e))},Rn=(e,t)=>{if(!e)return-2;let n=new Pn;e.state=n,n.strm=e,n.window=null,n.mode=$t;let r=Ln(e,t);return r!==0&&(e.state=null),r},zn=e=>Rn(e,Mn),Bn=!0,Vn,Hn,Un=e=>{if(Bn){Vn=new Int32Array(512),Hn=new Int32Array(32);let t=0;for(;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(Yt(Zt,e.lens,0,288,Vn,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;Yt(Qt,e.lens,0,32,Hn,0,e.work,{bits:5}),Bn=!1}e.lencode=Vn,e.lenbits=9,e.distcode=Hn,e.distbits=5},Wn=(e,t,n,r)=>{let i,a=e.state;return a.window===null&&(a.window=new Uint8Array(1<<a.wbits)),a.wsize===0&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0),r>=a.wsize?(a.window.set(t.subarray(n-a.wsize,n),0),a.wnext=0,a.whave=a.wsize):(i=a.wsize-a.wnext,i>r&&(i=r),a.window.set(t.subarray(n-r,n-r+i),a.wnext),r-=i,r?(a.window.set(t.subarray(n-r,n),0),a.wnext=r,a.whave=a.wsize):(a.wnext+=i,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=i))),0},Gn=(e,t)=>{let n,r,i,a,o,s,c,l,u,d,f,p,m,h,g=0,_,v,y,b,x,S,C,w,T=new Uint8Array(4),E,D,O=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(Q(e)||!e.output||!e.input&&e.avail_in!==0)return-2;n=e.state,n.mode===X&&(n.mode=dn),o=e.next_out,i=e.output,c=e.avail_out,a=e.next_in,r=e.input,s=e.avail_in,l=n.hold,u=n.bits,d=s,f=c,w=0;inf_leave:for(;;)switch(n.mode){case $t:if(n.wrap===0){n.mode=dn;break}for(;u<16;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if(n.wrap&2&&l===35615){n.wbits===0&&(n.wbits=15),n.check=0,T[0]=l&255,T[1]=l>>>8&255,n.check=F(n.check,T,2,0),l=0,u=0,n.mode=en;break}if(n.head&&(n.head.done=!1),!(n.wrap&1)||(((l&255)<<8)+(l>>8))%31){e.msg=`incorrect header check`,n.mode=Z;break}if((l&15)!=8){e.msg=`unknown compression method`,n.mode=Z;break}if(l>>>=4,u-=4,C=(l&15)+8,n.wbits===0&&(n.wbits=C),C>15||C>n.wbits){e.msg=`invalid window size`,n.mode=Z;break}n.dmax=1<<n.wbits,n.flags=0,e.adler=n.check=1,n.mode=l&512?ln:X,l=0,u=0;break;case en:for(;u<16;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if(n.flags=l,(n.flags&255)!=8){e.msg=`unknown compression method`,n.mode=Z;break}if(n.flags&57344){e.msg=`unknown header flags set`,n.mode=Z;break}n.head&&(n.head.text=l>>8&1),n.flags&512&&n.wrap&4&&(T[0]=l&255,T[1]=l>>>8&255,n.check=F(n.check,T,2,0)),l=0,u=0,n.mode=tn;case tn:for(;u<32;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}n.head&&(n.head.time=l>>>0),n.flags&512&&n.wrap&4&&(T[0]=l&255,T[1]=l>>>8&255,T[2]=l>>>16&255,T[3]=l>>>24&255,n.check=F(n.check,T,4,0)),l=0,u=0,n.mode=nn;case nn:for(;u<16;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}n.head&&(n.head.xflags=l&255,n.head.os=l>>8),n.flags&512&&n.wrap&4&&(T[0]=l&255,T[1]=l>>>8&255,n.check=F(n.check,T,2,0)),l=0,u=0,n.mode=rn;case rn:if(n.flags&1024){for(;u<16;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}n.length=l,n.head&&(n.head.extra_len=l),n.flags&512&&n.wrap&4&&(T[0]=l&255,T[1]=l>>>8&255,n.check=F(n.check,T,2,0)),l=0,u=0}else n.head&&(n.head.extra=null);n.mode=an;case an:if(n.flags&1024&&(p=n.length,p>s&&(p=s),p&&(n.head&&(C=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Uint8Array(n.head.extra_len)),n.head.extra.set(r.subarray(a,a+p),C)),n.flags&512&&n.wrap&4&&(n.check=F(n.check,r,p,a)),s-=p,a+=p,n.length-=p),n.length))break inf_leave;n.length=0,n.mode=on;case on:if(n.flags&2048){if(s===0)break inf_leave;p=0;do C=r[a+p++],n.head&&C&&n.length<65536&&(n.head.name+=String.fromCharCode(C),n.length++);while(C&&p<s);if(n.flags&512&&n.wrap&4&&(n.check=F(n.check,r,p,a)),s-=p,a+=p,C)break inf_leave}else n.head&&(n.head.name=null);n.length=0,n.mode=sn;case sn:if(n.flags&4096){if(s===0)break inf_leave;p=0;do C=r[a+p++],n.head&&C&&n.length<65536&&(n.head.comment+=String.fromCharCode(C),n.length++);while(C&&p<s);if(n.flags&512&&n.wrap&4&&(n.check=F(n.check,r,p,a)),s-=p,a+=p,C)break inf_leave}else n.head&&(n.head.comment=null);n.mode=cn;case cn:if(n.flags&512){for(;u<16;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if(n.wrap&4&&l!==(n.check&65535)){e.msg=`header crc mismatch`,n.mode=Z;break}l=0,u=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=X;break;case ln:for(;u<32;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}e.adler=n.check=Nn(l),l=0,u=0,n.mode=un;case un:if(n.havedict===0)return e.next_out=o,e.avail_out=c,e.next_in=a,e.avail_in=s,n.hold=l,n.bits=u,2;e.adler=n.check=1,n.mode=X;case X:if(t===5||t===6)break inf_leave;case dn:if(n.last){l>>>=u&7,u-=u&7,n.mode=Tn;break}for(;u<3;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}switch(n.last=l&1,l>>>=1,--u,l&3){case 0:n.mode=fn;break;case 1:if(Un(n),n.mode=vn,t===6){l>>>=2,u-=2;break inf_leave}break;case 2:n.mode=hn;break;case 3:e.msg=`invalid block type`,n.mode=Z}l>>>=2,u-=2;break;case fn:for(l>>>=u&7,u-=u&7;u<32;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if((l&65535)!=(l>>>16^65535)){e.msg=`invalid stored block lengths`,n.mode=Z;break}if(n.length=l&65535,l=0,u=0,n.mode=pn,t===6)break inf_leave;case pn:n.mode=mn;case mn:if(p=n.length,p){if(p>s&&(p=s),p>c&&(p=c),p===0)break inf_leave;i.set(r.subarray(a,a+p),o),s-=p,a+=p,c-=p,o+=p,n.length-=p;break}n.mode=X;break;case hn:for(;u<14;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if(n.nlen=(l&31)+257,l>>>=5,u-=5,n.ndist=(l&31)+1,l>>>=5,u-=5,n.ncode=(l&15)+4,l>>>=4,u-=4,n.nlen>286||n.ndist>30){e.msg=`too many length or distance symbols`,n.mode=Z;break}n.have=0,n.mode=gn;case gn:for(;n.have<n.ncode;){for(;u<3;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}n.lens[O[n.have++]]=l&7,l>>>=3,u-=3}for(;n.have<19;)n.lens[O[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,E={bits:n.lenbits},w=Yt(Xt,n.lens,0,19,n.lencode,0,n.work,E),n.lenbits=E.bits,w){e.msg=`invalid code lengths set`,n.mode=Z;break}n.have=0,n.mode=_n;case _n:for(;n.have<n.nlen+n.ndist;){for(;g=n.lencode[l&(1<<n.lenbits)-1],_=g>>>24,v=g>>>16&255,y=g&65535,!(_<=u);){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if(y<16)l>>>=_,u-=_,n.lens[n.have++]=y;else{if(y===16){for(D=_+2;u<D;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if(l>>>=_,u-=_,n.have===0){e.msg=`invalid bit length repeat`,n.mode=Z;break}C=n.lens[n.have-1],p=3+(l&3),l>>>=2,u-=2}else if(y===17){for(D=_+3;u<D;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}l>>>=_,u-=_,C=0,p=3+(l&7),l>>>=3,u-=3}else{for(D=_+7;u<D;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}l>>>=_,u-=_,C=0,p=11+(l&127),l>>>=7,u-=7}if(n.have+p>n.nlen+n.ndist){e.msg=`invalid bit length repeat`,n.mode=Z;break}for(;p--;)n.lens[n.have++]=C}}if(n.mode===Z)break;if(n.lens[256]===0){e.msg=`invalid code -- missing end-of-block`,n.mode=Z;break}if(n.lenbits=9,E={bits:n.lenbits},w=Yt(Zt,n.lens,0,n.nlen,n.lencode,0,n.work,E),n.lenbits=E.bits,w){e.msg=`invalid literal/lengths set`,n.mode=Z;break}if(n.distbits=6,n.distcode=n.distdyn,E={bits:n.distbits},w=Yt(Qt,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,E),n.distbits=E.bits,w){e.msg=`invalid distances set`,n.mode=Z;break}if(n.mode=vn,t===6)break inf_leave;case vn:n.mode=yn;case yn:if(s>=6&&c>=258){e.next_out=o,e.avail_out=c,e.next_in=a,e.avail_in=s,n.hold=l,n.bits=u,Rt(e,f),o=e.next_out,i=e.output,c=e.avail_out,a=e.next_in,r=e.input,s=e.avail_in,l=n.hold,u=n.bits,n.mode===X&&(n.back=-1);break}for(n.back=0;g=n.lencode[l&(1<<n.lenbits)-1],_=g>>>24,v=g>>>16&255,y=g&65535,!(_<=u);){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if(v&&!(v&240)){for(b=_,x=v,S=y;g=n.lencode[S+((l&(1<<b+x)-1)>>b)],_=g>>>24,v=g>>>16&255,y=g&65535,!(b+_<=u);){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}l>>>=b,u-=b,n.back+=b}if(l>>>=_,u-=_,n.back+=_,n.length=y,v===0){n.mode=wn;break}if(v&32){n.back=-1,n.mode=X;break}if(v&64){e.msg=`invalid literal/length code`,n.mode=Z;break}n.extra=v&15,n.mode=bn;case bn:if(n.extra){for(D=n.extra;u<D;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}n.length+=l&(1<<n.extra)-1,l>>>=n.extra,u-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=xn;case xn:for(;g=n.distcode[l&(1<<n.distbits)-1],_=g>>>24,v=g>>>16&255,y=g&65535,!(_<=u);){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if(!(v&240)){for(b=_,x=v,S=y;g=n.distcode[S+((l&(1<<b+x)-1)>>b)],_=g>>>24,v=g>>>16&255,y=g&65535,!(b+_<=u);){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}l>>>=b,u-=b,n.back+=b}if(l>>>=_,u-=_,n.back+=_,v&64){e.msg=`invalid distance code`,n.mode=Z;break}n.offset=y,n.extra=v&15,n.mode=Sn;case Sn:if(n.extra){for(D=n.extra;u<D;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}n.offset+=l&(1<<n.extra)-1,l>>>=n.extra,u-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg=`invalid distance too far back`,n.mode=Z;break}n.mode=Cn;case Cn:if(c===0)break inf_leave;if(p=f-c,n.offset>p){if(p=n.offset-p,p>n.whave&&n.sane){e.msg=`invalid distance too far back`,n.mode=Z;break}p>n.wnext?(p-=n.wnext,m=n.wsize-p):m=n.wnext-p,p>n.length&&(p=n.length),h=n.window}else h=i,m=o-n.offset,p=n.length;p>c&&(p=c),c-=p,n.length-=p;do i[o++]=h[m++];while(--p);n.length===0&&(n.mode=yn);break;case wn:if(c===0)break inf_leave;i[o++]=n.length,c--,n.mode=yn;break;case Tn:if(n.wrap){for(;u<32;){if(s===0)break inf_leave;s--,l|=r[a++]<<u,u+=8}if(f-=c,e.total_out+=f,n.total+=f,n.wrap&4&&f&&(e.adler=n.check=n.flags?F(n.check,i,f,o-f):ke(n.check,i,f,o-f)),f=c,n.wrap&4&&(n.flags?l:Nn(l))!==n.check){e.msg=`incorrect data check`,n.mode=Z;break}l=0,u=0}n.mode=En;case En:if(n.wrap&&n.flags){for(;u<32;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if(n.wrap&4&&l!==(n.total&4294967295)){e.msg=`incorrect length check`,n.mode=Z;break}l=0,u=0}n.mode=Dn;case Dn:w=1;break inf_leave;case Z:w=-3;break inf_leave;case On:return-4;case kn:default:return-2}return e.next_out=o,e.avail_out=c,e.next_in=a,e.avail_in=s,n.hold=l,n.bits=u,(n.wsize||f!==e.avail_out&&n.mode<Z&&(n.mode<Tn||t!==4))&&Wn(e,e.output,e.next_out,f-e.avail_out)?(n.mode=On,-4):(d-=e.avail_in,f-=e.avail_out,e.total_in+=d,e.total_out+=f,n.total+=f,n.wrap&4&&f&&(e.adler=n.check=n.flags?F(n.check,i,f,e.next_out-f):ke(n.check,i,f,e.next_out-f)),e.data_type=n.bits+(n.last?64:0)+(n.mode===X?128:0)+(n.mode===vn||n.mode===pn?256:0),(d===0&&f===0||t===4)&&w===0&&(w=-5),w)},Kn=e=>{if(Q(e))return-2;let t=e.state;return t.window&&(t.window=null),e.state=null,0},qn=(e,t)=>{if(Q(e))return-2;let n=e.state;return n.wrap&2?(n.head=t,t.done=!1,0):-2},Jn=(e,t)=>{let n=t.length,r,i,a;return Q(e)||(r=e.state,r.wrap!==0&&r.mode!==un)?-2:r.mode===un&&(i=1,i=ke(i,t,n,0),i!==r.check)?-3:(a=Wn(e,t,n,n),a?(r.mode=On,-4):(r.havedict=1,0))},Yn=class{constructor(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg=``,this.state=null,this.data_type=2,this.adler=0}},Xn=class{constructor(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name=``,this.comment=``,this.hcrc=0,this.done=!1}},Zn=e=>{let t=new Uint8Array(e.reduce((e,t)=>e+t.length,0)),n=0;for(let r of e)t.set(r,n),n+=r.length;return t};function Qn(e){"@babel/helpers - typeof";return Qn=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Qn(e)}function $n(e,t){if(Qn(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Qn(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function er(e){var t=$n(e,`string`);return Qn(t)==`symbol`?t:t+``}function $(e,t,n){return(t=er(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var tr=Object.prototype.toString,nr={level:-1,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,raw:!1,gzip:!1,legacyHash:!1,dictionary:new Uint8Array},rr=class{constructor(e={}){$(this,`options`,void 0),$(this,`err`,void 0),$(this,`msg`,void 0),$(this,`ended`,void 0),$(this,`started`,void 0),$(this,`chunks`,void 0),$(this,`strm`,void 0),$(this,`result`,void 0),this.options=Object.assign({},nr,e);let t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg=``,this.ended=!1,this.started=!1,this.chunks=[],this.result=new Uint8Array,this.strm=new Yn,this.strm.avail_out=0;let n=jt(this.strm,t.level,8,t.windowBits,t.memLevel,t.strategy,t.legacyHash);if(n!==0)throw Error(I[n]);tr.call(t.dictionary)===`[object ArrayBuffer]`&&(t.dictionary=new Uint8Array(t.dictionary));let r=t.dictionary;if(r.length){if(t.gzip)throw Error(`dictionary is not supported with gzip`);if(n=Ft(this.strm,r),n!==0)throw Error(I[n])}}push(e,t=!1){let n=this.strm,r=this.options.chunkSize,i,a;if(this.ended)return!1;for(a=typeof t==`number`?t:t===!0?4:0,typeof e==`string`?n.input=new TextEncoder().encode(e):tr.call(e)===`[object ArrayBuffer]`?n.input=new Uint8Array(e):n.input=e,n.next_in=0,n.avail_in=n.input.length,this.started||(this.started=!0,this.onStart(n));;){if(n.avail_out===0&&(n.output=new Uint8Array(r),n.next_out=0,n.avail_out=r),(a===2||a===3)&&n.avail_out<=6){this.onData(n.output.subarray(0,n.next_out)),n.avail_out=0;continue}if(i=Nt(n,a),i===-2)break;if(i===1){n.next_out>0&&this.onData(n.output.subarray(0,n.next_out)),i=Pt(this.strm);break}if(n.avail_out===0){this.onData(n.output);continue}if(a>0&&n.next_out>0){this.onData(n.output.subarray(0,n.next_out)),n.avail_out=0;continue}if(n.avail_in===0)return!0}return this.err=i,this.msg=n.msg||I[i],this.ended=!0,this.onEnd(i),i===0}onStart(e){}onData(e){this.chunks.push(e)}onEnd(e){e===0&&(this.result=Zn(this.chunks)),this.chunks=[]}};function ir(e,t={}){let n=new rr(t);if(n.push(e,!0),n.err)throw Error(n.msg);return n.result}function ar(e,t={}){return ir(e,Object.assign({},t,{raw:!0}))}function or(e,t={}){return ir(e,Object.assign({},t,{gzip:!0}))}function sr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function cr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?sr(Object(n),!0).forEach(function(t){$(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var lr=Object.prototype.toString,ur={chunkSize:1024*64,windowBits:15,raw:!1,dictionary:new Uint8Array},dr=class{constructor(e={}){$(this,`options`,void 0),$(this,`err`,void 0),$(this,`msg`,void 0),$(this,`ended`,void 0),$(this,`started`,void 0),$(this,`chunks`,void 0),$(this,`strm`,void 0),$(this,`result`,void 0),this.options=Object.assign({},ur,e);let t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!e.windowBits&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15||(t.windowBits|=15)),this.err=0,this.msg=``,this.ended=!1,this.started=!1,this.chunks=[],this.result=new Uint8Array,this.strm=new Yn,this.strm.avail_out=0;let n=Rn(this.strm,t.windowBits);if(n!==0)throw Error(I[n]);lr.call(t.dictionary)===`[object ArrayBuffer]`&&(t.dictionary=new Uint8Array(t.dictionary));let r=t.dictionary;if(t.raw&&r.length&&(n=Jn(this.strm,r),n!==0))throw Error(I[n])}push(e,t=!1){let n=this.strm,r=this.options.chunkSize,i,a,o;if(this.ended)return this.err===0;for(a=typeof t==`number`?t:t===!0?4:0,lr.call(e)===`[object ArrayBuffer]`?n.input=new Uint8Array(e):n.input=e,n.next_in=0,n.avail_in=n.input.length,this.started||(this.started=!0,this.onStart(n));;){if(n.avail_out===0&&(n.output=new Uint8Array(r),n.next_out=0,n.avail_out=r),i=Gn(n,a),i===2){let e=this.options.dictionary;e.length&&(i=Jn(n,e),i===0?i=Gn(n,a):i===-3&&(i=2))}for(;n.avail_in>0&&i===1&&n.state.wrap&2&&n.state.flags!==0&&n.input[n.next_in]!==0;)In(n),i=Gn(n,a);if(i===-2||i===-3||i===2||i===-4)break;if(o=n.avail_out,n.next_out&&(n.avail_out===0||i===1||a>0)&&(this.onData(n.output.length===n.next_out?n.output:n.output.subarray(0,n.next_out)),n.avail_out=0,n.next_out=0),!((i===0||i===-5)&&o===0)){if(i===1){i=Kn(this.strm);break}if(n.avail_in===0){if(a===4){i=Kn(this.strm),i===0&&(i=-5);break}return!0}}}return this.err=i,this.msg=n.msg||I[i],this.ended=!0,this.onEnd(i),i===0}onStart(e){}onData(e){this.chunks.push(e)}onEnd(e){e===0&&(this.result=Zn(this.chunks)),this.chunks=[]}};function fr(e,t={}){let n=new dr(t);if(n.push(e,!0),n.err)throw Error(n.msg);let r=n.result;return t.toText?new TextDecoder().decode(r):r}function pr(e,t={}){return fr(e,cr(cr({},t),{},{raw:!0}))}e.Deflate=rr,e.GZheader=Xn,e.Inflate=dr,e.ZStream=Yn,e.Z_BLOCK=Ie,e.Z_BUF_ERROR=Ge,e.Z_DATA_ERROR=Ue,e.Z_DEFAULT_STRATEGY=Xe,e.Z_ERRNO=Ve,e.Z_FILTERED=Ke,e.Z_FINISH=Fe,e.Z_FIXED=Ye,e.Z_FULL_FLUSH=Pe,e.Z_HUFFMAN_ONLY=qe,e.Z_MEM_ERROR=We,e.Z_NEED_DICT=Be,e.Z_NO_FLUSH=je,e.Z_OK=Re,e.Z_PARTIAL_FLUSH=Me,e.Z_RLE=Je,e.Z_STREAM_END=ze,e.Z_STREAM_ERROR=He,e.Z_SYNC_FLUSH=Ne,e.Z_TREES=Le,e.deflate=ir,e.deflateRaw=ar,e.gzip=or,e.inflate=fr,e.ungzip=fr,e.inflateRaw=pr,e.zlibDeflate=Nt,e.zlibDeflateEnd=Pt,e.zlibDeflateInit=Mt,e.zlibDeflateInit2=jt,e.zlibDeflateReset=kt,e.zlibDeflateResetKeep=Ot,e.zlibDeflateSetDictionary=Ft,e.zlibDeflateSetHeader=At,e.zlibInflate=Gn,e.zlibInflateEnd=Kn,e.zlibInflateGetHeader=qn,e.zlibInflateInit=zn,e.zlibInflateInit2=Rn,e.zlibInflateReset=In,e.zlibInflateReset2=Ln,e.zlibInflateResetKeep=Fn,e.zlibInflateSetDictionary=Jn});
//# sourceMappingURL=pako.umd.min.js.map
/* ==================== 题库数据 ==================== */

const KNOW = {"v":1,"subjects":[{"id":"biochem","n":"生物化学","ic":"🧬","cl":"#34c759","chs":[{"id":"p1","n":"蛋白质化学","ks":[{"id":"aa","n":"氨基酸与肽键","core":"20 种标准氨基酸按侧链性质分四类：<b>非极性</b>（Gly、Ala、Val、Leu、Ile、Pro、Phe、Met、Trp）、<b>极性不带电</b>（Ser、Thr、Cys、Tyr、Asn、Gln）、<b>酸性</b>（Asp、Glu）、<b>碱性</b>（Lys、Arg、His）。\n<b>肽键</b>是 α-COOH 与 α-NH₂ 脱水形成的酰胺键，具部分双键性质，不能自由旋转，六个原子（Cα-CO-NH-Cα）共处一个刚性平面——这是 α 螺旋和 β 折叠能规则重复的结构基础。\n<b>等电点 pI</b>：净电荷为零时的 pH。中性氨基酸 pI=(pK₁+pK₂)/2，酸性氨基酸 pI=(pK₁+pK_R)/2（两个羧基），碱性氨基酸 pI=(pK_R+pK₂)/2（两个氨基）。pI 时溶解度最低、电泳不迁移。\n<b>紫外吸收 280 nm</b> 来自 Trp、Tyr、Phe 的苯环，是测蛋白浓度的最常用手段（A280）。<b>Edman 降解法</b>从 N 端逐个切下 PTH-氨基酸，测序上限约 50 个残基。","keys":["氨基酸","肽键","等电点","pI","pK","Edman","280","紫外吸收","茚三酮","侧链","酸性氨基酸","碱性氨基酸","含氮量","肽平面","二硫键","胱氨酸","氮含量","凯氏定氮","蛋白质含量"],"traps":["酸性氨基酸 pI=(pK₁+pK_R)/2，碱性是 (pK_R+pK₂)/2，两者不能混。","His 侧链 pKa≈6.0，生理 pH 下只有部分质子化，别当成\"几乎完全带正电\"。","280 nm 吸收主要靠 Trp 和 Tyr，Phe 贡献很小；核酸在 260 nm。"],"hook":"酸性两羧、碱性两氨；pI 就取「不带电那两个 pK」的平均","hs":[{"k":["280","紫外吸收"],"h":"280 三兄弟：色 > 酪 > 苯（Trp 吸得最狠）——蛋白定量就盯这一个数"},{"k":["茚三酮"],"h":"茚三酮：氨基酸一律蓝紫，唯独 Pro 给黄色（它是亚氨基酸）"},{"k":["Edman","N端","N 端"],"h":"Edman 从 N 头一口一口啃，一次一个 PTH，啃到 50 个就断"},{"k":["肽键","肽平面","肽单位"],"h":"肽键是酰胺带半个双键：六原子锁死在一个平面，所以二级结构才能规则重复"},{"k":["二硫键","胱氨酸"],"h":"两个 Cys 手拉手 = 胱氨酸；二硫键一断，三级结构立刻散架"},{"k":["等电点","pI"],"h":"pI 就是「不带电」那个 pH：不迁移、最难溶、最容易沉出来"},{"k":["含氮量","凯氏"],"h":"蛋白含氮 16%，乘 6.25 就是蛋白克数"},{"k":["必需氨基酸"],"h":"八必需：缬、异亮、苯丙、蛋、色、苏、赖（婴儿再加组氨酸）"},{"k":["含氮量最高","含氮最高"],"h":"含氮之王是 Arg（精氨酸）——侧链胍基一口气带 4 个氮"},{"k":["吲哚环"],"h":"吲哚环只有 Trp 有；甲状腺素则是 Tyr 碘化来的"},{"k":["荧光"],"h":"蛋白荧光主要来自 Trp（最强）和 Tyr，Phe 太弱基本不算"},{"k":["Sanger","测序"],"h":"Sanger 双脱氧：ddNTP 一插就停，按片段长短排队读序列"},{"k":["六肽","肽链顺序","氨基酸顺序","N端序列"],"h":"测顺序老办法：Edman 从 N 端啃；现在直接质谱打碎拼"},{"k":["pK2+pK3","pK1+pK2","pI=（","pI=("],"h":"酸性取 pK₁+pK₂（两个羧基）、碱性取 pK_R+pK₂（两个氨基）——酸取小、碱取大"}]},{"id":"struct","n":"蛋白质结构层次与折叠","core":"<b>一级</b>：氨基酸排列顺序（含二硫键位置），由肽键维系，决定高级结构。<b>二级</b>：主链局部规则构象——α 螺旋（每圈 3.6 个残基、上升 0.54 nm、n 与 n+4 残基间形成氢键，氢键<b>平行于</b>螺旋轴）、β 折叠（氢键<b>垂直</b>于链走向）、β 转角、无规卷曲。<b>三级</b>：整条肽链的三维折叠，靠疏水作用（主要）、氢键、离子键、二硫键、范德华力维持。<b>四级</b>：亚基间的缔合。\n<b>模体 motif</b>（βαβ、螺旋-转角-螺旋）是二级结构的组合；<b>结构域 domain</b> 是三级结构层次上半独立折叠的功能单元。\n<b>变性</b>只破坏非共价键（不断肽键），表现为溶解度下降、黏度上升、生物活性丧失、紫外吸收红移；<b>复性</b>在合适条件下可自发完成（Anfinsen 核糖核酸酶实验），证明\"一级结构决定高级结构\"。\n<b>分子伴侣</b>（Hsp70、GroEL/GroES）不提供折叠信息，只防止错误聚集、帮助正确折叠。","keys":["α螺旋","β折叠","二级结构","三级结构","四级结构","结构域","模体","变性","复性","Anfinsen","分子伴侣","超二级结构","氢键","疏水作用","亚基","构象"],"traps":["α 螺旋每圈 3.6 个残基、螺距 0.54 nm、相邻残基上升 0.15 nm；β 折叠相邻肽链间距约 0.47 nm（0.34 nm 是 B-DNA 碱基对间距），别混。","变性不破坏肽键，所以分子量不变、一级结构不变——这是判断题高频陷阱。","维持三级结构的主力是疏水作用，不是氢键；氢键主要是二级结构的主力。"],"hook":"一级顺序、二级氢键、三级疏水、四级亚基——四层各认一个功臣","hs":[{"k":["α螺旋","α-螺旋","α 螺旋"],"h":"α：3.6 步一圈、一圈 0.54、一步 0.15；氢键 n 连 n+4，平行于轴"},{"k":["β折叠","β-折叠","β 折叠","0.34","链间距"],"h":"0.34 是 DNA 的碱基对！β 折叠链间距约 0.47，每残基沿链走 0.35——三个数别串门"},{"k":["变性"],"h":"变性三降一升：黏度降、溶解度降、活性降，A280 升；肽键一根没断"},{"k":["复性","Anfinsen"],"h":"Anfinsen 把核糖核酸酶拆散又装回去 = 一级结构自带图纸"},{"k":["分子伴侣"],"h":"分子伴侣只是脚手架，不给图纸（不提供折叠信息）"},{"k":["疏水作用","疏水"],"h":"三级靠疏水、二级靠氢键——功臣别记错"},{"k":["模体","motif","结构域"],"h":"模体是二级的拼接（βαβ），结构域是三级的半独立单元"},{"k":["超二级结构","模体","motif"],"h":"超二级结构=二级结构的组合拳：βαβ、螺旋-转角-螺旋"},{"k":["一级结构"],"h":"一级结构只讲顺序（含二硫键位置），不讲空间"},{"k":["亚基"],"h":"四级结构=亚基之间怎么摆，不是亚基内部怎么折"},{"k":["Anfinsen","核糖核酸酶"],"h":"Anfinsen：拆散了还能自己装回去，证明一级定高级"}]},{"id":"globin","n":"珠蛋白与氧合协同效应","core":"<b>Mb</b>：153 个残基，8 段 α 螺旋（A–H），<b>1 个</b>血红素，结合 1 分子 O₂，曲线<b>双曲形</b>，<b>无</b>协同，功能是肌肉储氧，对 O₂ 亲和力高、释放难。\n<b>Hb</b>：α₂β₂ 四聚体，<b>4 个</b>血红素，结合 4 分子 O₂，曲线 <b>S 形</b>，<b>正协同</b>（第一个 O₂ 结合后亚基构象由 T 态转 R 态，后续亲和力升高），功能是肺装载、组织释放。\n<b>别构调节</b>：2,3-BPG（降低亲和力、促释放）、H⁺ 和 CO₂（<b>Bohr 效应</b>，酸性环境促释放）、温度升高均右移曲线。\n<b>血红素</b>：原卟啉 IX + 中心 Fe²⁺，Fe²⁺ 与 4 个吡咯 N、近端 His(F8) 及 O₂ 配位；Fe²⁺ 氧化成 Fe³⁺ 即失去携氧能力（高铁血红蛋白血症）。\n<b>镰刀型贫血</b>：β 链第 6 位 Glu→Val，疏水突变导致脱氧状态下 HbS 聚合成纤维。","keys":["肌红蛋白","血红蛋白","珠蛋白","血红素","协同效应","S形","双曲线","Bohr","波尔效应","2,3-BPG","别构","T态","R态","镰刀","高铁血红蛋白","氧合"],"traps":["Mb 是 1 个血红素、双曲线、无协同；Hb 是 4 个血红素、S 形、正协同——个数和曲线形状必答。","Bohr 效应是 H⁺/CO₂ 降低 Hb 对 O₂ 亲和力（右移），不是升高。","2,3-BPG 结合在脱氧 Hb 的中央孔穴（β 链之间），稳定 T 态。"],"hook":"Mb 单干：1 个血红素、双曲线、无协同；Hb 组队：4 个、S 形、正协同","hs":[{"k":["波尔","Bohr"],"h":"酸了、CO₂ 多了，Hb 就松手——组织里正酸，所以正好放氧"},{"k":["BPG","2,3-二磷酸甘油酸"],"h":"BPG 是 Hb 的松手剂：BPG 多，抓得松，氧放得爽"},{"k":["胎儿","HbF"],"h":"HbF 的 γ 链不待见 BPG，所以能从妈妈手里抢氧"},{"k":["一氧化碳","CO中毒","碳氧血红蛋白","COHb"],"h":"CO 抢位又锁门：亲和力涨 200 倍，氧到了也放不出去"},{"k":["镰状","HbS"],"h":"β6 谷→缬，一个字母之差，红细胞变镰刀"},{"k":["协同","S形","S 形"],"h":"第一个氧最难上；上去一个，后面三个就顺了"},{"k":["肌红蛋白","Mb"],"h":"Mb 只储能不运输：亲和力高、不肯松手、没有协同"},{"k":["Hemoglobin","血红蛋白"],"h":"Hb 是 α₂β₂ 四聚体、4 个血红素；Mb 是单体、1 个"},{"k":["Heme","血红素"],"h":"血红素 = 原卟啉 IX + Fe²⁺；铁必须是二价才载氧，三价就废"},{"k":["T态","R态","T 态","R 态"],"h":"T 紧张（抓得松）、R 松弛（抓得紧）；氧一结合就 T→R"},{"k":["别构","协同效应"],"h":"一个氧上去，整团蛋白从 T 翻成 R，剩下三个就好上了"}]},{"id":"sep","n":"蛋白质分离纯化与分子量测定","core":"<b>沉淀</b>：盐析（硫酸铵，破坏水化层+中和电荷，<b>不变性</b>，可复溶）、有机溶剂沉淀（低温操作防变性）、等电点沉淀。\n<b>层析</b>四类：凝胶过滤（分子筛，<b>大分子先出</b>）、离子交换（按电荷，盐梯度洗脱）、疏水层析（按表面疏水性，高盐吸附）、亲和层析（生物特异识别，纯化倍数最高）。\n<b>电泳</b>：SDS-PAGE 按<b>亚基</b>分子量分离（SDS 使蛋白带负电、消除电荷差异，还原剂断开二硫键）；等电聚焦按 pI；双向电泳 = 第一维 IEF + 第二维 SDS-PAGE。\n<b>分子量测定</b>：超离心（沉降系数 S，1 S=10⁻¹³ s）、凝胶过滤、SDS-PAGE、渗透压法（数均分子量）、质谱（最准）。\n<b>透析/超滤</b>用于脱盐换液；<b>冷冻干燥</b>保存蛋白。","keys":["盐析","凝胶过滤","凝胶层析","离子交换","亲和层析","疏水层析","SDS-PAGE","电泳","等电聚焦","透析","超滤","沉降系数","Svedberg","分子筛","洗脱","纯化","分子量测定","考马斯亮蓝","Lowry","定量测定","稳定因素","水化层","分子筛效应"],"traps":["凝胶过滤大分子先出（不进孔），小分子后出；SDS-PAGE 是小分子跑得快——方向相反，别混。","SDS-PAGE 测的是亚基分子量，不是完整蛋白；测完整分子量要用凝胶过滤或超离心。","盐析不变性，有机溶剂沉淀若温度高会变性。"],"hook":"盐析降溶、透析除盐、凝胶筛大小、离子换电荷、亲和认脸","hs":[{"k":["SDS"],"h":"SDS 把电荷抹平，只按体重排队：小个子跑得快、跑得远"},{"k":["凝胶过滤","分子筛","葡聚糖"],"h":"大块头进不了孔，先出来；小个子钻洞，最后到"},{"k":["盐析","硫酸铵"],"h":"盐多了抢水，蛋白脱水抱团沉——不是变性"},{"k":["等电点沉淀"],"h":"pH 调到 pI，净电荷归零，蛋白自己抱团"},{"k":["亲和层析","亲和"],"h":"亲和层析就是认脸：只留它认识的那个"},{"k":["离子交换"],"h":"带正电抓负树脂；盐梯度一冲，弱的先走"},{"k":["超速离心","沉降系数"],"h":"S 越大沉得越快；S 不是分子量，别当单位用"},{"k":["相对分子质量","分子量测定","测分子量"],"h":"测分子量四法：渗透压、超离心、凝胶过滤、SDS-PAGE"},{"k":["S是","沉降系数","超速离心"],"h":"S 是沉降系数（10⁻¹³ s），不是分子量，别拿它当 Da"},{"k":["透析"],"h":"透析=用半透膜把小分子盐放走，留大分子"}]}]},{"id":"p2","n":"酶学","ks":[{"id":"enzyme","n":"酶催化机制与活性中心","core":"<b>酶的特点</b>：高效性（10⁷–10¹³ 倍）、专一性（绝对/相对/立体）、温和性、可调性；本质多为蛋白质（少数 RNA 是核酶）。\n<b>活性中心</b>：结合部位 + 催化部位，由少数关键残基（His、Ser、Cys、Asp、Glu）构成，位于疏水\"口袋\"中。\n<b>催化机制</b>：<b>降低活化能</b>（不改平衡常数、不改变反应方向）——邻近定向效应、张力/形变、酸碱催化（His 咪唑基最常用）、共价催化（Ser-OH、Cys-SH 形成共价中间物）、金属离子催化。\n<b>诱导契合</b>（Koshland）：底物诱导酶构象改变而互补，取代了刚性的\"锁钥学说\"。\n<b>过渡态</b>：酶与过渡态结合最紧，Transition-state analog 是强抑制剂的设计思路（如磺胺、他汀）。\n<b>酶活力单位</b>：U（每分钟催化 1 μmol 底物）、katal；<b>比活力</b>=U/mg 蛋白（纯化指标）。","keys":["活性中心","活化能","诱导契合","锁钥","过渡态","共价催化","酸碱催化","邻近","专一性","核酶","比活力","酶活力","高效性","辅酶","辅基","维生素","催化三联体","丝氨酸蛋白酶","最适pH","必需基团"],"traps":["酶只降低活化能，不改变平衡常数、不改变 ΔG——判断题最爱考。","过渡态类似物结合最紧，因此是最强的抑制剂类型。","比活力随纯化升高，总活力可能下降（损失）。"],"hook":"酶只降活化能：不改 ΔG、不改平衡、不改变反应方向，用完自己还在","hs":[{"k":["核酶","ribozyme","Cech"],"h":"RNA 也能当酶——Cech 的四膜虫 rRNA 自己剪自己"},{"k":["辅酶","辅基"],"h":"能透析掉的是辅酶，拆不下来的叫辅基"},{"k":["必需基团"],"h":"活性中心 + 撑构象的，统统叫必需基团"},{"k":["诱导契合"],"h":"不是先握好手，是见了底物才合手"},{"k":["活性中心","活性部位"],"h":"几个残基凑一个疏水口袋，多数底物是钻进来的"},{"k":["酶活力","比活力","转换数"],"h":"活力看总速度，比活力看纯度，转换数看单个酶多能干"},{"k":["TPP","cAMP","NADH=","辅酶"],"h":"辅酶点名：NAD⁺=烟酰胺、TPP=硫胺素(B₁)、FAD=核黄素(B₂)、CoA=泛酸、cAMP=环腺苷酸"}]},{"id":"kinetics","n":"酶促反应动力学","core":"<b>米氏方程</b> v = Vmax[S]/(Km+[S])，前提是稳态假设（ES 生成速率=分解速率）、[S]≫[E]。\n<b>Km</b>：v=Vmax/2 时的 [S]，单位是浓度；Km 越小亲和力越大；Km 近似等于 ES 的解离常数（当 k₂≪k₋₁）。<b>Vmax</b>=kcat[E]₀。\n<b>kcat/Km</b> 是催化效率（专一性常数），理论上限 10⁸–10⁹ M⁻¹s⁻¹（扩散限制）。\n<b>双倒数作图</b>（Lineweaver-Burk）1/v = Km/(Vmax·1/[S]) + 1/Vmax：纵截距=1/Vmax，横截距=−1/Km，斜率=Km/Vmax。\n<b>[S]≫Km</b> 时呈零级反应（与底物浓度无关）；<b>[S]≪Km</b> 时呈一级反应。","keys":["米氏","Km","Vmax","kcat","双倒数","Lineweaver","动力学","零级","一级反应","稳态","催化效率","亲和力"],"traps":["Km 是浓度单位，不是速率；Km 越小亲和力越<b>大</b>。","双倒数图横截距是 −1/Km，纵截距是 1/Vmax，斜率 Km/Vmax。","Vmax 只与酶总量有关，与底物浓度无关。"],"hook":"Km = 速度到一半时的底物浓度；Km 越小，抓得越紧","hs":[{"k":["双倒数","Lineweaver"],"h":"双倒数：纵截距 1/Vmax、横截距 −1/Km、斜率 Km/Vmax"},{"k":["kcat","催化效率","专一性常数"],"h":"kcat/Km 是效率天花板，接近 10⁸ 就是「完美酶」"},{"k":["Vmax","最大速度"],"h":"Vmax 只跟酶量有关，加底物加不上去"},{"k":["零级","一级反应"],"h":"底物管够=零级（速度不变），底物稀=一级（跟着浓度走）"},{"k":["米氏","Km"],"h":"Km 的单位是浓度（mol/L），不是速度"}]},{"id":"inhibit","n":"酶抑制作用","core":"<b>不可逆抑制</b>：抑制剂与活性中心共价结合，不能透析去除。例：DFP 修饰胰凝乳蛋白酶 Ser-OH；碘乙酸修饰 3-磷酸甘油醛脱氢酶 Cys-SH；青霉素酰化转肽酶。\n<b>可逆抑制</b>三类（双倒数图判断最快）：\n①<b>竞争性</b>：与底物竞争游离酶，Km 变大、Vmax 不变，直线交于<b>纵轴</b>；增大 [S] 可解除。例：丙二酸对琥珀酸脱氢酶、磺胺对二氢蝶酸合成酶。\n②<b>非竞争性</b>：结合 ES 或 E 的非活性中心部位，Km 不变、Vmax 变小，交于<b>横轴</b>。\n③<b>反竞争性</b>（uncompetitive）：只结合 ES，Km 和 Vmax 同比例变小，两线<b>平行</b>。\n<b>磺胺药</b>：结构与对氨基苯甲酸（PABA）相似，竞争性抑制细菌二氢蝶酸合成酶，人体不利用 PABA 故选择性好；与甲氧苄啶（抑制二氢叶酸还原酶）联用双重阻断。","keys":["抑制","竞争性","非竞争","反竞争","不可逆","磺胺","DFP","碘乙酸","丙二酸","Km变大","Vmax","双倒数图","PABA"],"traps":["竞争性抑制 Km↑ Vmax 不变（纵轴交点）；非竞争 Km 不变 Vmax↓（横轴交点）；反竞争两者同降（平行线）。","竞争性抑制可通过增加底物浓度解除，非竞争性不能。","磺胺是竞争性抑制二氢蝶酸合成酶，不是二氢叶酸还原酶。"],"hook":"竞争抬 Km、非竞争压 Vmax、反竞争两个一起降——三句话背完三类","hs":[{"k":["竞争性"],"h":"抢座位：Km↑、Vmax 不变，加底物能把它挤走"},{"k":["非竞争"],"h":"不抢座位只压顶速：Km 不变、Vmax↓，加底物也白搭"},{"k":["反竞争"],"h":"只绑 ES：Km、Vmax 同比例降，双倒数图两条平行线"},{"k":["磺胺"],"h":"磺胺冒充 PABA 骗二氢蝶酸合成酶；甲氧苄啶才打二氢叶酸还原酶"},{"k":["有机磷","DFP","敌敌畏"],"h":"有机磷磷酰化 Ser，解磷定来解（碘解磷定）"},{"k":["氰化物","CN"],"h":"CN⁻ 堵复合体 IV，电子断在最后一棒"},{"k":["碘乙酸"],"h":"碘乙酸烷化巯基，3-磷酸甘油醛脱氢酶当场报废"},{"k":["青霉素"],"h":"青霉素酰化转肽酶，细胞壁交联不上，细菌胀破"}]},{"id":"regulate","n":"酶的调节：别构、共价修饰、酶原","core":"<b>别构调节</b>：调节物结合调节亚基（非催化位点），引起构象改变从而改变活性；动力学曲线呈 <b>S 形</b>，不服从米氏方程；有正/负协同；例：ATP/AMP 调节磷酸果糖激酶-1、Akt。\n<b>共价修饰</b>：可逆磷酸化（蛋白激酶/磷酸酶，级联放大，一位点磷酸化耗 1 ATP）、腺苷化、ADP-核糖基化。\n<b>酶原激活</b>：不可逆的有限水解，切除一段肽链暴露活性中心。例：胰蛋白酶原→胰蛋白酶（肠激酶切 Lys-Ile）、胃蛋白酶原（H⁺ 自激活）、凝血酶原 cascade。\n<b>同工酶</b>：催化同一反应但分子结构、动力学、调节性质不同（LDH₁–LDH₅，心肌 LDH₁ 高、肝 LDH₅ 高）。\n<b>限速酶</b>：整条途径中活性最低、催化最慢的酶，通常是第一个不可逆反应或分支点的酶，受终产物反馈抑制。","keys":["别构","变构","共价修饰","磷酸化","酶原","酶原激活","同工酶","限速酶","反馈抑制","级联","调节亚基","S形"],"traps":["别构酶不服从米氏方程，曲线是 S 形——这是它与普通酶的关键区别。","酶原激活是有限水解（不可逆），不是磷酸化。","限速酶通常是途径第一步或分支点，受终产物反馈抑制。"],"hook":"别构改构象、共价加磷酸、酶原靠剪切——三种开关，三种速度","hs":[{"k":["酶原"],"h":"先造保险栓，切一刀才上膛：胃蛋白酶原、胰蛋白酶原"},{"k":["共价修饰","磷酸化"],"h":"磷酸化是最常见的开关：激酶装、磷酸酶拆"},{"k":["别构"],"h":"别构酶走 S 形曲线，有协同，不是米氏那条双曲线"}]}]},{"id":"p3","n":"糖代谢","ks":[{"id":"glycolysis","n":"糖酵解（EMP）","core":"部位：<b>胞质</b>。1 分子葡萄糖 → 2 分子丙酮酸，10 步分两阶段。\n<b>准备阶段（耗能 2 ATP）</b>：己糖激酶（G→G6P，限速，肝内为葡糖激酶，Km 高、不受 G6P 抑制）、磷酸己糖异构酶、磷酸果糖激酶-1（F6P→F1,6BP，<b>最关键限速酶</b>）、醛缩酶、磷酸丙糖异构酶。\n<b>放能阶段（产 4 ATP + 2 NADH）</b>：3-磷酸甘油醛脱氢酶（唯一脱氢产 NADH，含 Cys-SH，被碘乙酸抑制）、磷酸甘油酸激酶（底物水平磷酸化）、磷酸甘油酸变位酶、烯醇化酶（被 F⁻ 抑制）、丙酮酸激酶（第二个底物水平磷酸化，限速）。\n<b>净产</b>：2 ATP + 2 NADH + 2 丙酮酸。\n<b>调节</b>：PFK-1 被 ATP、柠檬酸抑制，被 AMP、ADP、F-2,6-BP 激活；胰岛素诱导、胰高血糖素抑制。\n<b>丙酮酸去向</b>：有氧进线粒体→乙酰CoA；缺氧→乳酸（LDH，Cori 循环回肝异生）；酵母→乙醇。\n<b>2,3-BPG 旁路</b>（红细胞）：1,3-BPG→2,3-BPG→3-PGA，<b>不产 ATP</b>，用于调节 Hb 亲和力。","keys":["糖酵解","EMP","丙酮酸激酶","磷酸果糖激酶","己糖激酶","葡糖激酶","醛缩酶","烯醇化酶","3-磷酸甘油醛","乳酸","底物水平磷酸化","净生成","2,3-BPG","氟化物"],"traps":["糖酵解净产 2 ATP（不是 4），另有 2 NADH；发生在胞质，不需要氧。","PFK-1 是最关键限速酶，不是己糖激酶；肝内葡糖激酶 Km 高，空腹时肝不抢糖。","1,3-BPG 通过 2,3-BPG 旁路时不产 ATP，否则红细胞无法调节 Hb。"],"hook":"前十步先花 2 个 ATP，后五步赚 4 个，净落 2 个","hs":[{"k":["限速","关键酶","磷酸果糖激酶","PFK"],"h":"三个闸门：己糖激酶、PFK-1、丙酮酸激酶；PFK-1 是总闸"},{"k":["底物水平磷酸化"],"h":"底物水平磷酸化只有两步：PGK 一个、PK 一个，各 1 ATP"},{"k":["NADH"],"h":"糖酵解只给 2 个 NADH，还在胞质，必须穿梭才能进线粒体"},{"k":["丙酮酸"],"h":"丙酮酸有氧变乙酰CoA，缺氧变乳酸（酵母变乙醇）"},{"k":["净生成","净产"],"h":"净 2 个！4 是毛收入，2 个已经先花出去了"},{"k":["己糖激酶","葡糖激酶"],"h":"己糖激酶 Km 小（抓得紧），葡糖激酶 Km 大（只在血糖高时干活）"}]},{"id":"gluconeo","n":"糖异生","core":"部位：<b>肝（主要）+ 肾</b>，<b>线粒体 + 胞质</b>。前体：乳酸、生糖氨基酸、甘油、丙酸。\n<b>四个旁路（绕过三个不可逆反应）</b>：\n①丙酮酸→草酰乙酸：<b>丙酮酸羧化酶</b>（线粒体，需生物素、ATP）；\n②草酰乙酸→PEP：<b>PEP 羧激酶</b>（需 GTP，出线粒体走苹果酸/天冬氨酸穿梭）；\n③F1,6BP→F6P：<b>果糖二磷酸酶-1</b>；\n④G6P→G：<b>葡糖-6-磷酸酶</b>（肝、肾有，肌肉没有 → 肌糖原不能补血糖）。\n<b>能量代价</b>：2 丙酮酸→1 葡萄糖消耗 <b>6 ATP</b>（4 ATP + 2 GTP）+ 2 NADH。\n<b>Cori 循环</b>：肌乳酸→血→肝异生为糖→回肌，把肌肉的代谢负担转给肝。\n<b>调节</b>：胰高血糖素/糖皮质激素促进（cAMP→PKA→磷酸化 PFK-2 失活、FBPase-2 激活）；胰岛素抑制；乙酰CoA 激活丙酮酸羧化酶。","keys":["糖异生","丙酮酸羧化酶","PEP羧激酶","果糖二磷酸酶","葡糖-6-磷酸酶","Cori","生糖氨基酸","乳酸循环","生物素","6个ATP","旁路"],"traps":["糖异生不是糖酵解的简单逆转，必须靠 4 个旁路酶绕过 3 个不可逆反应。","肌肉缺葡糖-6-磷酸酶，所以肌糖原只能自用、不能直接补血糖。","2 丙酮酸→1 葡萄糖耗 6 个高能磷酸键（4 ATP + 2 GTP），不是 2 个。"],"hook":"糖异生不是糖酵解倒放：三个不可逆步要绕道，全程烧 6 个高能键","hs":[{"k":["丙酮酸羧化","PEPCK","关键酶"],"h":"绕道四酶：丙酮酸羧化酶 → PEPCK → F-1,6-BPase → G-6-Pase"},{"k":["乳酸循环","Cori","乳酸"],"h":"肌肉产乳酸，肝做成糖，再送回去——Cori 循环"},{"k":["生糖氨基酸","生酮"],"h":"Ile、Phe、Tyr、Trp、Thr 两头都能走（生糖兼生酮）"},{"k":["6个高能","6 个高能","消耗"],"h":"糖异生 6 个高能键：4 ATP + 2 GTP"}]},{"id":"tca","n":"三羧酸循环（TCA）","core":"部位：<b>线粒体基质</b>（琥珀酸脱氢酶在线粒体内膜）。起始于乙酰CoA + 草酰乙酸→柠檬酸。\n<b>八步</b>：柠檬酸合酶（限速，受 ATP、NADH、琥珀酰CoA、柠檬酸抑制）→顺乌头酸酶→异柠檬酸脱氢酶（<b>限速</b>，产 NADH+CO₂）→α-酮戊二酸脱氢酶复合体（<b>限速</b>，产 NADH+CO₂，需 TPP、硫辛酸、CoA、FAD、NAD⁺ 五种辅因子）→琥珀酰CoA 合成酶（底物水平磷酸化产 <b>GTP</b>）→琥珀酸脱氢酶（<b>唯一</b>结合在内膜的酶，辅基 FAD）→延胡索酸酶→苹果酸脱氢酶（产 NADH）。\n<b>一轮产物</b>：3 NADH + 1 FADH₂ + 1 GTP + 2 CO₂；<b>碳原子不来自乙酰CoA</b>（两个 CO₂ 来自草酰乙酸部分）。\n<b>丙酮酸脱氢酶复合体</b>（PDH）：丙酮酸→乙酰CoA + NADH + CO₂，需 5 种辅因子，被乙酰CoA/NADH/ATP 抑制，被 ADP/NAD⁺ 激活；<b>砷化物</b>抑制（与硫辛酸结合）。\n<b>回补反应</b>：丙酮酸羧化酶（→草酰乙酸）、谷氨酸脱氨。\n<b>意义</b>：三大物质代谢的最终通路、提供还原当量、为合成提供前体（草酰乙酸→糖异生、α-KG→谷氨酸、琥珀酰CoA→血红素）。","keys":["三羧酸循环","TCA","柠檬酸","异柠檬酸","α-酮戊二酸","琥珀酸","延胡索酸","苹果酸","草酰乙酸","丙酮酸脱氢酶","回补","顺乌头酸","琥珀酰CoA","硫辛酸"],"traps":["一轮 TCA 产 3 NADH + 1 FADH₂ + 1 GTP，不是 4 NADH。","琥珀酸脱氢酶是唯一结合在线粒体内膜的 TCA 酶，辅基是 FAD 不是 NAD。","两个 CO₂ 的碳不来自乙酰CoA 的碳，而来自草酰乙酸——这是经典陷阱。"],"hook":"八步、两脱羧、四脱氢、一次底物磷酸化；脱掉的两个碳不是这轮乙酰CoA的","hs":[{"k":["柠檬酸合酶","异柠檬酸脱氢酶","酮戊二酸脱氢酶"],"h":"三个限速：柠檬酸合酶、异柠檬酸脱氢酶、α-酮戊二酸脱氢酶"},{"k":["底物水平","琥珀酰CoA"],"h":"TCA 只有一步产高能键：琥珀酰CoA 合成酶，产的是 GTP"},{"k":["回补","丙酮酸羧化"],"h":"草酰乙酸不够，靠丙酮酸羧化酶回补"},{"k":["线粒体","基质"],"h":"TCA 在基质，唯独琥珀酸脱氢酶挂在内膜上（还是复合体 II）"},{"k":["脱羧","CO2"],"h":"两次脱羧：异柠檬酸一次、α-酮戊二酸一次"},{"k":["乙酰CoA","草酰乙酸"],"h":"乙酰CoA 只能烧不能变糖——两个碳进来，两个碳出去"}]},{"id":"etc","n":"呼吸链与氧化磷酸化","core":"部位：<b>线粒体内膜</b>。\n<b>两条链</b>：NADH 呼吸链（复合体Ⅰ→Q→Ⅲ→cyt c→Ⅳ→O₂），FADH₂ 呼吸链（复合体Ⅱ→Q→Ⅲ→Ⅳ），P/O 分别 2.5 与 1.5。\n<b>三个质子泵</b>：复合体Ⅰ、Ⅲ、Ⅳ 把 H⁺ 泵到膜间隙，形成电化学梯度。<b>化学渗透假说</b>（Mitchell）：H⁺ 顺梯度回流驱动 ATP 合酶（复合体Ⅴ，F₀F₁）合成 ATP。\n<b>抑制剂</b>：鱼藤酮/阿米妥（Ⅰ）、抗霉素A（Ⅲ）、CN⁻/CO/NaN₃/H₂S（Ⅳ，与 cyt a₃ 结合）、寡霉素（ATP 合酶）、<b>2,4-二硝基苯酚（DNP）</b>为<b>解偶联剂</b>（运 H⁺ 但不产 ATP，只产热）。\n<b>穿梭</b>：甘油-3-磷酸穿梭（胞质 NADH→FADH₂，产 1.5 ATP）、苹果酸-天冬氨酸穿梭（→NADH，产 2.5 ATP）。\n<b>P/O 比</b>：每对电子经 NADH 链泵出 10 H⁺，合成 1 ATP 需 4 H⁺（+1 转运），故 2.5。","keys":["呼吸链","氧化磷酸化","ATP合酶","电子传递","解偶联","化学渗透","复合体","细胞色素","泛醌","鱼藤酮","抗霉素","寡霉素","二硝基苯酚","P/O","质子梯度"],"traps":["CN⁻、CO 抑制复合体Ⅳ（cyt a₃），不是 ATP 合酶。","DNP 是解偶联剂：电子照常传递、耗氧继续，但 ATP 不合成、能量变热。","胞质 NADH 走甘油-3-磷酸穿梭只产 1.5 ATP（变成 FADH₂ 入口），不是 2.5。"],"hook":"NADH 从 I 进，FADH₂ 从 II 进，都汇到 Q，终点交给 O₂","hs":[{"k":["P/O","2.5","1.5"],"h":"NADH 2.5、FADH₂ 1.5；3 和 2 是老黄历"},{"k":["解偶联","二硝基苯酚","DNP"],"h":"DNP 把质子放回基质：ATP 没了，热来了（减肥药因此出过人命）"},{"k":["鱼藤酮","抗霉素","寡霉素"],"h":"鱼藤酮堵 I、抗霉素堵 III、CN⁻/CO 堵 IV、寡霉素堵 ATP 合酶"},{"k":["ATP合酶","ATP 合酶","F0F1","F₀F₁"],"h":"F₀ 是质子通道，F₁ 是催化头——质子流过去，ATP 才出来"},{"k":["质子"],"h":"4 个 H⁺ 换 1 个 ATP：3 个过合酶 + 1 个运磷酸"},{"k":["呼吸链","电子传递"],"h":"电子一路往下掉，能量一路往上泵质子"}]},{"id":"atpcalc","n":"ATP 产量计算（教材口径）","core":"现行教材口径：<b>NADH = 2.5 ATP，FADH₂ = 1.5 ATP</b>。\n<b>葡萄糖彻底氧化 = 30 或 32 ATP</b>：\n- 糖酵解：净 2 ATP + 2 NADH（胞质）\n- 丙酮酸→乙酰CoA：2 NADH\n- TCA 两轮：6 NADH + 2 FADH₂ + 2 GTP\n- 若胞质 NADH 走<b>甘油-3-磷酸穿梭</b>（→1.5）：2+2×1.5+2×2.5+6×2.5+2×1.5+2 = <b>30</b>\n- 若走<b>苹果酸-天冬氨酸穿梭</b>（→2.5，肝、心）：<b>32</b>\n<b>常用换算</b>：1 乙酰CoA 彻底氧化 = 10 ATP；1 软脂酸（16C）= 8 乙酰CoA → 7 轮β氧化（7 FADH₂ + 7 NADH）→ 80+10.5+17.5−2（活化）= <b>106 ATP</b>。\n<b>旧教材口径</b>：NADH=3、FADH₂=2，得 36/38，软脂酸 129——考研答题以报考院校指定教材为准，834 现多用 30/32。","keys":["ATP","净生成","多少个ATP","能量计算","P/O","氧化磷酸化","彻底氧化","软脂酸","乙酰CoA","穿梭","高能磷酸键","高能键"],"traps":["葡萄糖是 30（甘油-3-磷酸穿梭）或 32（苹果酸-天冬氨酸穿梭），38 是旧口径。","软脂酸 106 ATP（新）/129（旧），差的是 7 轮 β 氧化的 NADH/FADH₂ 换算。","计算题要写清用哪套口径和哪种穿梭，否则阅卷按错的扣。"],"hook":"葡萄糖 30 或 32，差的只有一件事：胞质 NADH 走哪种穿梭","hs":[{"k":["软脂酸","106","129"],"h":"软脂酸 106（新）/129（旧）= 7 轮 β 氧化 + 8 个乙酰CoA − 2 活化"},{"k":["乙酰CoA","10个"],"h":"1 个乙酰CoA = 10：3 NADH(7.5) + 1 FADH₂(1.5) + 1 GTP(1)"},{"k":["穿梭"],"h":"甘油-3-磷酸穿梭把 2.5 降成 1.5，所以少 2 个；苹果酸-天冬氨酸不降"},{"k":["甘油"],"h":"甘油三步进糖酵解：算出来跟葡萄糖差不多，别漏那 1 个 NADH"}]},{"id":"glycogen","n":"糖原合成与分解","core":"<b>合成</b>（胞质）：G→G6P（己糖激酶/葡糖激酶）→G1P（磷酸葡萄糖变位酶）→UDPG（UDPG 焦磷酸化酶，耗 UTP）→引物（糖原蛋白 glycogenin 自糖基化）→糖原合酶（α-1,4 键）→分支酶（α-1,6 键，每 8–12 个残基一个分支）。\n<b>分解</b>：糖原磷酸化酶（<b>限速</b>，磷酸解 α-1,4 键产 G1P，需 PLP 为辅基）→脱支酶（转移+水解 α-1,6）→G1P→G6P→（肝）葡糖-6-磷酸酶→葡萄糖。\n<b>共价调节级联</b>：胰高血糖素/肾上腺素→cAMP→PKA→磷酸化酶激酶→磷酸化酶 b→a（<b>活性型</b>）；同时 PKA 磷酸化糖原合酶使其<b>失活</b>。胰岛素→蛋白磷酸酶→去磷酸，方向相反。\n<b>1 分子 G6P 糖原分解净产</b>：胞质内糖酵解得 3 ATP（游离葡萄糖只 2，省了己糖激酶的 1 ATP）。\n<b>糖原贮积症</b>：von Gierke（G6Pase 缺）、Pompe（溶酶体 α-葡糖苷酶缺，心肌）、McArdle（肌磷酸化酶缺）。","keys":["糖原","糖原合酶","磷酸化酶","UDPG","分支酶","脱支酶","糖原蛋白","级联","糖原贮积","PLP","共价调节"],"traps":["糖原分解产 G1P（不是 G6P），再由变位酶转成 G6P。","糖原合酶形成 α-1,4 键，分支酶形成 α-1,6 键。","磷酸化后：磷酸化酶<b>激活</b>、糖原合酶<b>失活</b>——同一个 PKA 双向调控。"],"hook":"合成用 UDPG 往还原端挂，分解靠磷酸化酶切 1,4、脱支酶收 1,6","hs":[{"k":["糖原合酶","UDPG"],"h":"糖原合酶是限速；葡萄糖必须先变 UDPG 才挂得上去"},{"k":["磷酸化酶"],"h":"磷酸化酶切 1,4 键，切到分支只剩 4 个就停手"},{"k":["cAMP","PKA"],"h":"肾上腺素→cAMP→PKA→磷酸化：合酶关掉、磷酸化酶打开"},{"k":["糖原贮积","Von Gierke"],"h":"Von Gierke 缺 G-6-磷酸酶：肝大 + 空腹低血糖"}]},{"id":"pentose","n":"磷酸戊糖途径","core":"部位：<b>胞质</b>。以 G6P 为起点，分氧化相与非氧化相。\n<b>氧化相（不可逆）</b>：G6P 脱氢酶（<b>限速</b>，需 NADP⁺，被 NADPH 反馈抑制）→6-磷酸葡糖酸内酯酶→6-磷酸葡糖酸脱氢酶（产 NADPH + CO₂）→核酮糖-5-P。共产 <b>2 NADPH + 1 CO₂</b>。\n<b>非氧化相（可逆）</b>：核酮糖-5-P ⇄ 核糖-5-P（需核糖时）或经转酮醇酶（TPP）/转醛醇酶进入糖酵解（需 NADPH 时）。\n<b>生理意义</b>：①提供 <b>NADPH</b>（还原性合成：脂肪酸、胆固醇；维持 GSH 还原态，保护红细胞膜）；②提供<b>核糖-5-P</b>（核苷酸合成）；③与糖酵解互通（4 分子 G6P + 2 H₂O → 5 分子 G6P + 6 CO₂ + 12 NADPH）。\n<b>G6PD 缺乏</b>：NADPH 不足→GSH 减少→红细胞膜脂质过氧化→<b>蚕豆病</b>（溶血性贫血），诱因蚕豆、磺胺、抗疟药。","keys":["磷酸戊糖","G6PD","NADPH","核糖","转酮","转醛","蚕豆病","溶血","谷胱甘肽","6-磷酸葡糖酸"],"traps":["PPP 产的是 NADPH 不是 NADH——还原性合成用 NADPH。","限速酶是 G6P 脱氢酶，不是转酮醇酶；受 NADPH 抑制。","G6PD 缺乏导致溶血，不是糖原贮积。"],"hook":"PPP 两步脱氢送出 2 个 NADPH，剩下靠转酮、转醛重排碳骨架","hs":[{"k":["6-磷酸葡萄糖脱氢酶","G-6-PDH"],"h":"G-6-PDH 是闸门，NADPH 一多就回头把它关掉"},{"k":["NADPH"],"h":"NADPH 干两件事：合成脂肪、还原谷胱甘肽（抗氧化）"},{"k":["蚕豆病","溶血"],"h":"G-6-PDH 缺 → 蚕豆病：红细胞被氧化炸掉"}]}]},{"id":"p4","n":"脂代谢","ks":[{"id":"betaox","n":"脂肪酸β氧化与酮体","core":"<b>活化</b>：胞质中脂酰CoA 合成酶 + CoA + ATP→脂酰CoA（消耗 2 个高能键，相当于 2 ATP）。\n<b>转运</b>：肉碱脂酰转移酶Ⅰ（<b>限速</b>，CPT-Ⅰ，丙二酰CoA 抑制）→肉碱-脂酰肉碱转位酶→CPT-Ⅱ，进入线粒体基质。\n<b>四步重复</b>：脱氢（FAD，酰基CoA 脱氢酶，产 FADH₂）→水化（烯酰CoA 水合酶）→再脱氢（NAD⁺，产 NADH）→硫解（β-酮脂酰CoA 硫解酶，加 CoA 释出乙酰CoA）。\n<b>产物</b>：n 碳饱和脂肪酸 → n/2 乙酰CoA + (n/2−1) FADH₂ + (n/2−1) NADH。\n<b>不饱和脂肪酸</b>：需异构酶（顺→反）、还原酶（2,4-二烯酰CoA 还原酶，耗 NADPH），少产 1 个 FADH₂。<b>奇数链</b>：最后产丙酰CoA→（生物素）→甲基丙二酰CoA→（B₁₂）→琥珀酰CoA 进 TCA。\n<b>酮体</b>：肝线粒体由乙酰CoA 生成乙酰乙酸、β-羟丁酸、丙酮（HMG-CoA 合酶为限速）；肝<b>不能利用</b>酮体（缺琥珀酰CoA 转硫酶），供脑、心、肾。","keys":["β氧化","β-氧化","肉碱","脂酰CoA","硫解","酮体","乙酰乙酸","HMG","丙酰CoA","甲基丙二酰","不饱和脂肪酸","奇数","活化","CPT","瘦蛋白","Leptin","Knoop","偶数碳","瘦蛋白","Leptin","Knoop"],"traps":["β 氧化在<b>线粒体基质</b>，脂肪酸活化在<b>胞质</b>——部位要分开答。","肝生成酮体但不能利用酮体（缺琥珀酰CoA 转硫酶）。","奇数链脂肪酸最后产丙酰CoA，需生物素和 B₁₂ 才能变琥珀酰CoA。"],"hook":"β 氧化四步一轮：脱氢—水化—再脱氢—硫解；每轮掉 2 个碳，交 1 个 NADH + 1 个 FADH₂","hs":[{"k":["肉碱","CPT"],"h":"长链脂肪酸要坐肉碱的班车进线粒体，CPT-I 是检票口"},{"k":["酮体"],"h":"肝造酮体却不烧酮体——酮体是给脑和肌肉的外卖"},{"k":["不饱和"],"h":"多一个双键就少一个 FADH₂，少 1.5 个 ATP"},{"k":["β氧化","β-氧化","脂酰CoA"],"h":"第一轮就产 FADH₂ 的是脂酰CoA 脱氢酶（β 氧化的第一步）"},{"k":["Leptin","瘦蛋白"],"h":"Leptin 是脂肪细胞喊的「我饱了」，缺了会一直饿"},{"k":["乙醛酸","Glyoxylate"],"h":"乙醛酸循环两个专属酶：异柠檬酸裂解酶 + 苹果酸合酶——植物/细菌靠它把脂肪变糖"},{"k":["硫激酶","脂酰CoA合成酶"],"h":"活化脂肪酸要烧 2 个高能键（脂酰CoA 合成酶），算 ATP 时先扣 2"}]}]},{"id":"p5","n":"核酸与分子生物学","ks":[{"id":"nucleic","n":"核酸结构与理化性质","core":"<b>一级</b>：3′,5′-磷酸二酯键连接，5′端游离磷酸、3′端游离羟基。<b>二级</b>：B-DNA 右手双螺旋，10 bp/圈、螺距 3.4 nm、直径 2 nm，碱基对间 0.34 nm；A-DNA 右手较粗；<b>Z-DNA 左手</b>、锯齿状骨架。\n<b>Chargaff 规则</b>：A=T、G=C，(A+G)=(T+C)。碱基堆积力（主要）+ 氢键维持双螺旋。\n<b>变性</b>：氢键断裂、双链解开，<b>黏度下降</b>、A260 升高（<b>增色效应</b>）；<b>Tm</b> 是解链一半时的温度，G+C 含量越高 Tm 越高、离子强度越高 Tm 越高。\n<b>复性</b>：退火，是 Southern、PCR、杂交的基础。\n<b>RNA 类型</b>：mRNA（模板，有帽子、polyA）、tRNA（三叶草/倒 L，含稀有碱基，3′端 CCA）、rRNA（核糖体骨架，肽基转移酶活性属核酶）。\n<b>超螺旋</b>：DNA 拓扑异构酶Ⅰ切一条链（不需 ATP）、Ⅱ切两条链（需 ATP，如细菌旋转酶被喹诺酮抑制）。","keys":["双螺旋","Chargaff","Tm","变性","增色效应","复性","杂交","超螺旋","拓扑异构酶","tRNA","rRNA","mRNA","稀有碱基","磷酸二酯键","Z-DNA","碱基顺序","互补链","摩尔比","碱基组成","G占","A的摩尔","碱基配对","遗传物质","核小体","组蛋白","核苷酸","摩尔吸光系数","碱水解","DNA的一级结构","cGMP","dTMP","cAMP","环化","碱基T","双链"],"traps":["变性后黏度<b>下降</b>、A260 <b>升高</b>，两个方向别写反。","G+C 越高 Tm 越高；A-T 只有 2 个氢键，G-C 有 3 个。","tRNA 3′端是 CCA-OH，氨基酸挂在这里；反密码环识别密码子。"],"hook":"A=T 两个氢键，G≡C 三个；GC 越多越稳、Tm 越高","hs":[{"k":["0.34","3.4","10个碱基","10 bp"],"h":"B-DNA：0.34 nm 一对、3.4 nm 一圈、一圈 10 对——三个数一起记"},{"k":["增色","A260","260"],"h":"变性=增色：A260 升、黏度降；复性叫减色"},{"k":["Tm","解链温度"],"h":"Tm 是半数解链的温度：GC 高、盐高，Tm 就高"},{"k":["Z-DNA","左手"],"h":"Z 是左手锯齿，GC 交替才爱变脸"},{"k":["核小体","组蛋白"],"h":"146 bp 绕八聚体 1.75 圈——两个数字都要写"},{"k":["tRNA","CCA"],"h":"tRNA 三叶草，3′ 端 CCA 挂氨基酸，反密码环认密码子"},{"k":["拓扑异构","旋转酶","喹诺酮"],"h":"拓扑酶 I 切一条（不耗 ATP），II 切两条（耗 ATP）；喹诺酮打细菌 II 型"},{"k":["互补链","核苷酸顺序","pCTGGACAG"],"h":"写互补链：A↔T、G↔C，而且方向要反过来（5′↔3′）"},{"k":["Tm 值","Tm值","解链"],"h":"Tm 只跟 GC 含量和盐浓度走，跟分子长短关系不大"},{"k":["Chargaff"],"h":"Chargaff：A=T、G=C，所以 (A+G)=(T+C)"}]},{"id":"dnarep","n":"DNA 复制","core":"<b>半保留复制</b>（Meselson-Stahl 密度梯度实验证明）、双向、半不连续、需要引物。\n<b>原核酶系</b>：解旋酶（DnaB，水解 ATP）、单链结合蛋白 SSB、拓扑异构酶/旋转酶（解正超螺旋）、引物酶（DnaG，合成 RNA 引物）、DNA 聚合酶Ⅲ（主力，5′→3′ 合成，3′→5′ 外切校对）、DNA 聚合酶Ⅰ（切除引物、填补缺口，5′→3′ 外切）、连接酶（封缺口，耗 ATP/NAD⁺）。\n<b>前导链</b>连续合成；<b>后随链</b>分段合成<b>冈崎片段</b>（原核 1000–2000 nt）。\n<b>真核</b>：多起点、α/δ/ε 聚合酶，δ 主合成、ε 校对；端粒酶（含 RNA 模板的逆转录酶）延长端粒，解决末端缩短问题。\n<b>保真度</b>：碱基配对 + 3′→5′ 外切校对 + 错配修复，错误率约 10⁻⁹。\n<b>抑制剂</b>：ddNTP（Sanger 测序）、AZT（逆转录酶）、喹诺酮（旋转酶）、利福平（细菌 RNA 聚合酶）。","keys":["半保留","冈崎片段","前导链","后随链","引物酶","DNA聚合酶","连接酶","解旋酶","端粒","拓扑异构酶","复制","Meselson"],"traps":["DNA 聚合酶只能 5′→3′ 延伸，所以后随链必须分段——冈崎片段的根本原因。","DNA 聚合酶Ⅰ负责切引物补缺口，Ⅲ 才是主要合成酶。","端粒酶是逆转录酶（RNA→DNA），不是 DNA 聚合酶。"],"hook":"半保留、双向、半不连续：领头链顺着走，随从链打成冈崎片段","hs":[{"k":["聚合酶III","Pol III","pol III"],"h":"III 号是主力延伸，I 号只会收尾（切引物、补缺口）"},{"k":["端粒酶"],"h":"端粒酶自带 RNA 模板，本质是逆转录酶，专救 5′ 端缩短"},{"k":["错配修复","MutS"],"h":"MutS 认错、MutH 认旧链，切掉重来"},{"k":["引物"],"h":"DNA 聚合酶不会起头，必须先给它一段 RNA 引物"},{"k":["冈崎"],"h":"冈崎片段只在随从链上出现，方向跟复制叉相反"},{"k":["Sanger","双脱氧","测序"],"h":"Sanger 测序靠 ddNTP 断链：谁先停谁最短，电泳一跑就读出来"},{"k":["Klenow","大肠杆菌聚合酶I"],"h":"Pol I 有三种活性：聚合、3′→5′ 外切（校对）、5′→3′ 外切（切引物）"}]},{"id":"trans","n":"转录与 RNA 加工","core":"<b>原核</b>：RNA 聚合酶（核心酶 α₂ββ′ω + σ 因子识别启动子 −35/−10 区），σ 因子释放后进入延伸；终止分<b>不依赖 ρ</b>（发夹结构 + U 串）和<b>依赖 ρ</b>（ρ 因子解链）两种。\n<b>真核</b>：RNA 聚合酶Ⅰ（rRNA）、Ⅱ（mRNA，被 α-鹅膏蕈碱抑制）、Ⅲ（tRNA、5S rRNA）；需通用转录因子，启动子有 TATA 框。\n<b>加工</b>：5′端加 m⁷G 帽子、3′端加 polyA 尾、<b>剪接</b>去除内含子（剪接体 snRNP，GU-AG 规则）、RNA 编辑、甲基化。\n<b>抑制剂</b>：利福平（细菌 RNA 聚）、α-鹅膏蕈碱（真核Ⅱ）、放线菌素D（模板 DNA）。\n<b>逆转录</b>：逆转录酶以 RNA 为模板合成 cDNA（需引物），是 RT-PCR、cDNA 文库的基础。","keys":["转录","RNA聚合酶","启动子","σ因子","ρ因子","内含子","外显子","剪接","帽子","polyA","鹅膏蕈碱","利福平","逆转录"],"traps":["σ 因子负责识别启动子，核心酶负责延伸——转录起始的关键是 σ。","真核 mRNA 由 RNA 聚合酶Ⅱ 转录，被 α-鹅膏蕈碱抑制；Ⅲ 管 tRNA。","利福平抑制细菌 RNA 聚合酶，不抑制真核的。"],"hook":"转录只抄一条链（模板链），RNA 聚合酶不用引物","hs":[{"k":["启动子","-10","-35","TATA"],"h":"原核 -10 TATAAT、-35 TTGACA；真核是 TATA 盒"},{"k":["ρ","rho","终止"],"h":"ρ 因子终止要烧 ATP；不依赖 ρ 的靠发夹结构自己卡住"},{"k":["帽子","polyA","加尾"],"h":"真核三件套：加帽、加尾、剪接；原核边转边译，来不及加工"},{"k":["剪接","内含子","snRNP"],"h":"剪接体由 snRNP 组成，剪掉内含子、拼起外显子"},{"k":["外显子","内含子"],"h":"外显子留下、内含子剪掉；但真核 mRNA 还有 5′帽和 3′polyA"}]},{"id":"transl","n":"蛋白质翻译","core":"<b>遗传密码特点</b>：三联体、连续、简并（多数氨基酸多个密码子）、通用（线粒体例外）、无重叠、<b>摆动性</b>（反密码子第一位与密码子第三位配对不严格）。\n<b>起始</b>：原核 fMet-tRNA + Shine-Dalgarno 序列 + IF1/2/3；真核 Met-tRNA + 帽子依赖 + eIF。\n<b>延伸</b>：进位（EF-Tu，耗 GTP）→成肽（肽基转移酶，<b>rRNA 是核酶</b>）→移位（EF-G，耗 GTP）。\n<b>终止</b>：终止密码 UAA/UAG/UGA，释放因子 RF1/RF2/RF3，耗 GTP。\n<b>能量</b>：每加 1 个氨基酸耗 <b>4 个高能键</b>（2 GTP 延伸 + 1 ATP 活化氨基酸 ×2），起始另耗 1 GTP。\n<b>抑制剂</b>：链霉素/卡那霉素（30S 起始）、四环素（30S 进位）、氯霉素（50S 肽基转移）、红霉素（50S 移位）、嘌呤霉素（冒充氨基酰-tRNA 致早熟终止）、白喉毒素（EF-2）、蓖麻毒素（28S rRNA）。\n<b>翻译后加工</b>：切除信号肽、糖基化、磷酸化、折叠、亚基组装。","keys":["密码子","反密码子","核糖体","起始","延伸","终止","摆动","简并","EF-Tu","EF-G","嘌呤霉素","氯霉素","四环素","翻译","SD序列","固相合成","合成方向","多肽链合成","固相","合成方向","多肽链合成","戴帽"],"traps":["简并性指一个氨基酸可有多个密码子，不是多个氨基酸共用一个密码子。","肽基转移酶活性由 rRNA 提供（核酶），不是蛋白质。","嘌呤霉素导致早熟终止（冒充氨基酰-tRNA），不是抑制起始。"],"hook":"AUG 起步，UAA/UAG/UGA 收工；核糖体沿 mRNA 5′→3′ 走","hs":[{"k":["简并","密码子"],"h":"密码子四特点：简并、通用、不重叠、无逗号"},{"k":["SD","Shine"],"h":"SD 序列是原核 mRNA 的停车位，让核糖体对准 AUG"},{"k":["嘌呤霉素"],"h":"嘌呤霉素冒充氨酰-tRNA 的尾巴，让肽链提前掉下来"},{"k":["氯霉素","四环素"],"h":"氯霉素打 50S（肽酰转移），四环素挡 30S 的 A 位"},{"k":["白喉"],"h":"白喉毒素 ADP-核糖化 eEF2，真核翻译直接熄火"},{"k":["起始","起始tRNA"],"h":"原核起始是甲酰甲硫氨酸（fMet），真核是 Met"},{"k":["遗传密码","密码子"],"h":"64 个密码子：61 个编码、3 个终止；AUG 兼起始"}]},{"id":"central","n":"中心法则与基因工程","core":"<b>中心法则</b>：DNA→RNA→蛋白质；补充 RNA→DNA（逆转录）、RNA→RNA（复制）、蛋白质→蛋白质（朊病毒）。\n<b>基因工程六步</b>：①获得目的基因（PCR、限制酶切、化学合成、逆转录 cDNA、文库筛选）②选载体（ori + 选择标记 + 多克隆位点）③体外切割连接（限制酶 + T4 DNA 连接酶）④导入宿主（转化 CaCl₂/电击、转染、显微注射、基因枪）⑤筛选鉴定（抗性、蓝白斑、PCR、酶切、测序）⑥表达纯化。\n<b>限制酶</b>：识别回文序列，产生黏性/平末端；同尾酶、同裂酶；<b>甲基化</b>保护自身 DNA。\n<b>PCR</b>：变性 94℃ → 退火 55–60℃ → 延伸 72℃（Taq 酶），n 轮扩增 2ⁿ 倍；需引物、dNTP、Mg²⁺。\n<b>载体</b>：质粒、噬菌体 λ、黏粒、BAC/YAC、表达载体、穿梭载体。\n<b>基因编辑</b>：CRISPR-Cas9（sgRNA 导向 + Cas9 切双链 + 细胞修复）。","keys":["中心法则","基因工程","DNA重组","限制性内切酶","载体","质粒","PCR","连接酶","转化","筛选","cDNA","CRISPR","黏性末端","中心法则","基因组","分子病","基因工程"],"traps":["Taq 酶耐热、最适 72℃，来自水生栖热菌——PCR 的关键。","限制酶识别回文序列，切割产生黏性末端才便于连接。","载体三要素：复制起点、选择标记、多克隆位点，缺一不可。"],"hook":"DNA→RNA→蛋白；逆转录是唯一的一条回头路","hs":[{"k":["逆转录"],"h":"逆转录酶：拿 RNA 当模板造 DNA；HIV 靠它活，AZT 靠骗它治病"},{"k":["限制酶","DNA连接酶","克隆载体","表达载体"],"h":"基因工程四步：切、连、转、筛"}]},{"id":"geneexp","n":"基因表达调控","core":"<b>原核操纵子</b>：<b>乳糖操纵子</b>（负调控 + 正调控）：无乳糖时 LacI 阻遏蛋白结合 O 区阻断转录；乳糖→异乳糖结合阻遏蛋白使其脱落；葡萄糖缺乏时 cAMP 升高、CAP 结合启动子上游促进转录（<b>葡萄糖效应</b>）。\n<b>色氨酸操纵子</b>：阻遏 + <b>衰减子</b>（前导肽含 2 个 Trp 密码子，Trp 充足时核糖体快速通过→形成 3-4 终止发夹→提前终止）。\n<b>真核层次</b>：染色质水平（甲基化抑制、乙酰化激活、组蛋白修饰）、转录水平（增强子/沉默子、转录因子）、转录后（剪接、miRNA、RNA 干扰）、翻译水平（起始因子磷酸化）、翻译后（加工、降解）。\n<b>表观遗传</b>：DNA 甲基化（CpG 岛）、组蛋白修饰、非编码 RNA，不改变序列但可遗传。","keys":["操纵子","乳糖操纵子","色氨酸操纵子","阻遏","CAP","cAMP","衰减子","增强子","甲基化","表观遗传","miRNA","基因表达调控","Lac","操纵基因","启动子","操纵子","原核基因表达","操纵子","操纵基因","启动子"],"traps":["乳糖操纵子是负调控（阻遏）+ 正调控（CAP-cAMP）双重控制，不是单纯负调控。","衰减子靠翻译偶联形成终止发夹，属转录提前终止。","DNA 甲基化通常<b>抑制</b>表达，组蛋白乙酰化通常<b>促进</b>表达。"],"hook":"乳糖操纵子：没乳糖阻遏蛋白坐着（关）；有乳糖它掉下来（开）；葡萄糖没了 CAP 才来帮忙","hs":[{"k":["CAP","cAMP"],"h":"cAMP 少 CAP 不干活；葡萄糖一缺，cAMP 升，CAP 来拉客"},{"k":["衰减","色氨酸","trp"],"h":"Trp 多 → 翻译快 → 2-3 配对 → 提前停（衰减子）"},{"k":["甲基化","表观"],"h":"甲基化关、乙酰化开；CpG 岛是开关区"},{"k":["miRNA","siRNA"],"h":"miRNA 半配对掐翻译，siRNA 全配对切降解"},{"k":["操纵子","operon"],"h":"操纵子 = 启动子 + 操纵基因 + 结构基因，一套开关管一串基因"},{"k":["乳糖","lac"],"h":"乳糖在就开、没乳糖就关；葡萄糖在，CAP 不来，开了也开不大"}]}]}]},{"id":"genetics","n":"遗传学","ic":"🧪","cl":"#bf5af2","chs":[{"id":"g1","n":"孟德尔与基因互作","ks":[{"id":"mendel","n":"分离与自由组合定律","core":"<b>分离定律</b>：一对等位基因在减数第一次分裂后期随同源染色体分开而分离，配子只含其中一个（1:1）。实质是<b>同源染色体分离</b>。\n<b>自由组合定律</b>：两对（及以上）位于<b>非同源染色体</b>上的等位基因，在减数分裂时独立分配，F₂ 表型 9:3:3:1（AaBb 自交），配子 4 种各 1/4。\n<b>适用条件</b>：真核有性生殖、核基因、基因间无连锁、完全显性、群体足够大、无致死。\n<b>验证方法</b>：测交（AaBb × aabb → 1:1:1:1）、自交、花粉直感。\n<b>显隐性判断</b>：杂交 F₁ 全为一方亲本性状→该性状显性；自交出现 3:1 → 3 份为显性；\"无中生有\"为隐性。\n<b>孟德尔成功原因</b>：选材（豌豆自花授粉、性状稳定、差异明显）、先单因子后多因子、用统计学方法、引入\"遗传因子\"概念。","keys":["分离定律","自由组合","孟德尔","测交","9:3:3:1","等位基因","同源染色体","显性","隐性","配子","自交","相对性状","基因型","表现型","一对相对性状","等位"],"traps":["自由组合的前提是基因位于非同源染色体上（不连锁），连锁基因不适用。","分离定律的细胞学基础是减Ⅰ同源染色体分离，不是减Ⅱ姐妹染色单体分离。","F₂ 9:3:3:1 需要完全显性、无致死、无互作，条件不满足就偏离。"],"hook":"一对看 3:1，两对看 9:3:3:1；前提：独立 + 完全显性 + 无致死","hs":[{"k":["测交"],"h":"测交配隐性纯合，后代比例 = 配子比例（这是万能钥匙）"},{"k":["分离定律","分离规律"],"h":"同源染色体分开，等位基因跟着分家"},{"k":["自由组合"],"h":"非同源染色体自由组合，才有 9:3:3:1"},{"k":["相对性状"],"h":"相对性状=同一性状的不同表现（豌豆的高 vs 矮），不是两个性状"},{"k":["Johannsen","约翰生","基因一词"],"h":"基因 Johannsen 起名，连锁 Morgan 立住，遗传学 Bateson 命名"},{"k":["分离现象","分离定律的意义"],"h":"分离定律的意义：证明基因成对存在、能分开——这是所有后续规律的地基"}]},{"id":"interact","n":"基因互作与比例变形","core":"两对非等位基因共同控制同一性状时，9:3:3:1 会变形成各种比例：\n<b>互补作用</b> 9:7（两显性基因都在才表现，如香豌豆花色）；\n<b>抑制基因</b> 13:3（显性抑制基因抑制另一基因的表达）；\n<b>显性上位</b> 12:3:1（显性基因抑制另一对基因的表现）；\n<b>隐性上位</b> 9:3:4（隐性纯合时掩盖另一基因，如小鼠毛色 cc 掩盖 A）；\n<b>重叠作用</b> 15:1（只要有任一显性基因就表现同一性状）；\n<b>积加作用</b> 9:6:1（两个显性基因效果累加）。\n<b>判断方法</b>：看 F₂ 总份数是否仍为 16；按\"有/无某显性基因\"重新归类，再看各类的基因型构成。\n<b>上位 vs 显性</b>：上位是<b>基因间</b>（不同座位）的掩盖，显性是<b>等位基因间</b>的掩盖。","keys":["基因互作","互补作用","上位","抑制基因","重叠作用","积加作用","9:7","13:3","12:3:1","9:3:4","15:1","9:6:1"],"traps":["上位效应发生在<b>非等位基因</b>之间，显隐性发生在等位基因之间。","9:3:4 是隐性上位（cc 掩盖 A），12:3:1 是显性上位，两者容易混。","互补作用 9:7 = 两个显性基因缺一不可，不是 9:6:1。"],"hook":"9:7 互补、9:3:4 隐上位、12:3:1 显上位、15:1 重叠、13:3 抑制","hs":[{"k":["9:7","互补"],"h":"9:7 = 两把钥匙开一把锁，缺一不可"},{"k":["9:3:4","隐性上位"],"h":"9:3:4：bb 一票否决，把 B 的表现整个吞掉"},{"k":["12:3:1","显性上位"],"h":"12:3:1：A 一在场，B 说什么都没用"},{"k":["15:1","重叠"],"h":"15:1：只要有一个显性就够，全隐才变"},{"k":["13:3","抑制"],"h":"13:3：抑制基因在场，显性也白搭"},{"k":["积加作用","9:6:1"],"h":"积加 9:6:1：两个显性各给一种表型，凑一起又是第三种"},{"k":["抑制作用","13:3"],"h":"抑制 13:3：I 在场就压住 C，只有 iiC_ 才显色"}]},{"id":"sexlink","n":"性别决定与伴性遗传","core":"<b>性别决定</b>：XY 型（人、果蝇，雄性异配）、ZW 型（鸟、鳞翅目，雌性异配）、XO 型（蝗虫）、环境决定（温度、社会地位）。\n<b>伴 X 隐性</b>（红绿色盲、血友病、DMD）：男性患者远多于女性；<b>交叉遗传</b>（外祖父→母亲→外孙）；女性患者父亲必病、儿子必病。\n<b>伴 X 显性</b>（抗维生素D佝偻病）：女性患者多于男性，男性患者女儿全病。\n<b>伴 Y</b>（SRY、毛耳）：全男性遗传，父传子。\n<b>限性/从性遗传</b>：如早秃（从性，杂合时男性表现、女性不表现）。\n<b>剂量补偿</b>：女性两条 X 中一条随机失活形成<b>巴氏小体</b>（Lyon 假说），故 X 连锁基因产物量两性相当；Klinefelter（XXY）有 1 个巴氏小体，Turner（XO）没有。","keys":["伴性遗传","性染色体","色盲","血友病","交叉遗传","巴氏小体","剂量补偿","Lyon","性别决定","ZW","SRY","从性遗传"],"traps":["伴 X 隐性\"男性多\"，伴 X 显性\"女性多\"，方向相反。","巴氏小体数 = X 染色体数 − 1（XXY 有 1 个，XO 为 0）。","交叉遗传指外祖父→女儿（携带者）→外孙，不是父传子。"],"hook":"XY 男、ZW 女（鸟蝶）；伴 X 隐性：男多、母传子、交叉遗传","hs":[{"k":["果蝇","白眼","摩尔根"],"h":"白眼基因在 X 上——摩尔根靠它拿到诺奖"},{"k":["莱昂","巴氏","剂量补偿"],"h":"莱昂假说：雌性随机灭一条 X，灭掉那条变巴氏小体"},{"k":["限性","从性"],"h":"限性看性别，从性看激素（早秃就是从性）"},{"k":["伴Y","限雄"],"h":"伴 Y 只传儿子，父传子一条线，女性永远没有"}]}]},{"id":"g2","n":"连锁与染色体","ks":[{"id":"linkage","n":"连锁交换与三点测交","core":"<b>完全连锁</b>（如果蝇雄，无交换）配子 1:1；<b>不完全连锁</b>产生重组型，但比例 <50%。\n<b>重组率</b> = 重组型数 / 总数 ×100%；<b>图距</b> 1 cM = 1% 重组率（<20% 时近似相等，距离大时需作图函数校正）。\n<b>两点测交</b>：只能看两基因间距离，无法确定顺序，双交换会被漏算而低估距离。\n<b>三点测交</b>：一次定顺序 + 距离。步骤：①找<b>亲本型</b>（最多的两类）②找<b>双交换型</b>（最少的两类）③与亲本型比较，<b>唯一改变的基因就在中间</b>④分别算两段重组率 ⑤<b>并发系数</b> = 实际双交换率 / 预期双交换率（= 两段重组率之积），干扰 I = 1 − 并发系数。\n<b>交换值</b>受温度、性别、年龄、染色体位置影响；着丝粒作图用四分体分析。","keys":["连锁","交换","重组率","图距","三点测交","双交换","并发系数","干扰","亲本型","作图","cM","完全连锁"],"traps":["双交换型是<b>最少</b>的两类，亲本型是<b>最多</b>的两类——先认这两头再定顺序。","双交换会低估图距，所以两点测交的距离小于实际。","并发系数 <1 表示正干扰（一个交换抑制 nearby 另一个交换）。"],"hook":"重组率=重组型/总数，1 cM=1%；亲本最多、双交换最少，唯一变了的那头在中间","hs":[{"k":["三点测交"],"h":"三点测交：先挑最多的（亲本）和最少的（双交换），一比就知道谁在中间"},{"k":["干涉","并发"],"h":"并发系数 C = 实际/预期，干涉 I = 1 − C"},{"k":["相引","相斥","顺式","反式"],"h":"AB/ab 是相引（顺式），Ab/aB 是相斥（反式）"},{"k":["交换值"],"h":"交换值超 50% 就按 50% 算，重组率封顶"},{"k":["图距","cM"],"h":"1 cM = 1% 重组率；距离远了要作图函数校正，不然低估"},{"k":["完全连锁"],"h":"完全连锁=不交换（如果蝇雄），配子只有亲本型 1:1"}]},{"id":"chromo","n":"染色体结构变异","core":"<b>缺失</b>：末端/中间缺失；后果——<b>假显性</b>（缺失显性等位基因使隐性基因表现）、致死（纯合）、猫叫综合征（5p−）。\n<b>重复</b>：同向/反向重复；<b>位置效应</b>（基因移到新位置表达改变，如果蝇棒眼 Bar）；不等交换产生。\n<b>倒位</b>：臂内（不包含着丝粒）/臂间（包含着丝粒）；杂合倒位形成<b>倒位环</b>，交换后产生缺失重复配子→<b>重组被抑制</b>（交换抑制子），是\"倒位是物种形成的缓冲\"的原因。\n<b>易位</b>：相互易位/罗伯逊易位（着丝粒融合，2 条近端着丝粒染色体融合，导致染色体数减少）；杂合易位在减数分裂形成<b>十字形</b>联会，产生部分不育配子；慢性粒细胞白血病 <b>Ph 染色体</b> t(9;22)。\n<b>检测</b>：缺失环、倒位环、易位十字、配对异常。","keys":["缺失","重复","倒位","易位","假显性","位置效应","倒位环","罗伯逊","十字形","棒眼","猫叫","Ph染色体","交换抑制"],"traps":["假显性由<b>缺失</b>造成（显性基因丢了），不是突变。","倒位杂合体交换被抑制，因为交换后配子缺失重复、不育。","罗伯逊易位使染色体<b>数目减少</b>但遗传物质总量基本不变。"],"hook":"缺、重、倒、易位四种变；缺失露隐性（假显性），倒位压交换，易位十字配对","hs":[{"k":["缺失","假显性"],"h":"缺失 = 把盖头掀了，隐性露脸，这叫假显性"},{"k":["倒位"],"h":"倒位杂合子交换被压，配对时出现倒位环"},{"k":["易位"],"h":"相互易位配对成十字形；罗伯逊易位是两条近端着丝粒染色体融合"},{"k":["重复","Bar"],"h":"不等交换造重复；果蝇 Bar 眼就是重复"},{"k":["倒位环"],"h":"倒位杂合子联会时拱出一个倒位环——这是识别倒位的标志"},{"k":["罗伯逊","着丝粒融合"],"h":"罗伯逊易位：两条近端着丝粒染色体着丝粒融合，染色体数少一条但信息不丢"}]},{"id":"num","n":"染色体数目变异","core":"<b>整倍体</b>：单倍体(n)、二倍体(2n)、多倍体（三倍体 3n、四倍体 4n）。同源多倍体（染色体加倍，如马铃薯 4x）、异源多倍体（种间杂交后加倍，如小麦 6x、油菜）。\n<b>非整倍体</b>：<b>三体</b>（2n+1，如 21 三体唐氏、18 三体、13 三体）、<b>单体</b>（2n−1，如 Turner XO）、缺体（2n−2）、四体。\n<b>成因</b>：减数分裂<b>不分离</b>（减Ⅰ同源染色体不分离或减Ⅱ姐妹染色单体不分离）→ 异常配子 n+1 / n−1。\n<b>三体的基因分离</b>：n+1 配子可育性下降；三体自交表型比随基因与着丝粒距离而变（不同基因型配子存活率不同）。\n<b>应用</b>：单倍体育种（花药培养→秋水仙素加倍，缩短育种年限）、多倍体育种（无籽西瓜 3n 不育）。","keys":["整倍体","多倍体","非整倍体","三体","单体","缺体","不分离","唐氏","秋水仙素","单倍体","同源多倍体","异源多倍体","21三体"],"traps":["三体是 2n+1，单体是 2n−1，不要写反。","唐氏综合征是 21 三体（数目变异），不是结构变异。","无籽西瓜是三倍体，减数分裂时联会紊乱→不育，所以无籽。"],"hook":"整倍体成组加减，非整倍体只差一条；三体 2n+1、单体 2n−1","hs":[{"k":["三体","21三体","唐氏"],"h":"21 三体=唐氏；18 爱德华、13 帕陶——记住 21 最常见"},{"k":["单体","Turner","XO型"],"h":"人类只有 X 单体（Turner）能活，常染色体单体基本活不了"},{"k":["三倍体","无籽"],"h":"3n 联会乱、配子不育，所以无籽"},{"k":["单倍体"],"h":"n 只有一套，减数分裂乱，高度不育"},{"k":["AAa","同源三倍"],"h":"AAa 分离：A : Aa : AA : a = 2 : 2 : 1 : 1"},{"k":["不分离"],"h":"不分离可能发生在减Ⅰ（同源）也可能在减Ⅱ（姐妹）——问哪一期要看清"},{"k":["缺体","四体"],"h":"缺体 2n−2、四体 2n+2——整条染色体的加减，不是整组"}]},{"id":"cyto","n":"细胞质遗传与母性影响","core":"<b>细胞质遗传特点</b>：<b>母系遗传</b>（正交反交结果不同，子代只随母本）、不遵循孟德尔比例、通过卵细胞胞质传递、连续回交可把核基因换掉而性状随母本保持。\n<b>物质基础</b>：线粒体 DNA（mtDNA，人 16569 bp，37 个基因，母系遗传、异质性、阈值效应）、叶绿体 DNA（cpDNA，如紫茉莉花斑）。\n<b>雄性不育</b>：核不育（ms）、<b>质核互作不育</b>（S(rr) 不育、N(rr) 可育、S(Rr)/N(Rr) 恢复可育）——三系配套：不育系、保持系、恢复系。\n<b>母性影响</b>（迟延遗传）：子代表型由<b>母本基因型</b>决定（如椎实螺壳旋向），仍属核遗传，只是 mRNA/蛋白在卵中预先积累，与细胞质遗传本质不同。\n<b>人类线粒体病</b>：LHON、MELAS，母系传递、能量器官（脑、肌）受累。","keys":["细胞质遗传","母系遗传","线粒体遗传","叶绿体","雄性不育","质核互作","母性影响","椎实螺","紫茉莉","mtDNA","异质性"],"traps":["母性影响仍是<b>核基因</b>控制（子代表型由母本基因型决定），不是细胞质遗传——这是最容易错的一题。","细胞质遗传正交反交结果不同；母性影响正反交也常不同，但本质是核基因。","质核互作不育需要三系配套：不育系 S(rr)、保持系 N(rr)、恢复系 N(RR)。"],"hook":"细胞质遗传三条：母系传、不分离、不走 Mendel 比例","hs":[{"k":["母性影响","椎实螺"],"h":"椎实螺看娘的基因型定壳旋，不是看自己"},{"k":["雄性不育"],"h":"玉米 S 型不育是线粒体的事，不是核基因"},{"k":["花斑","紫茉莉"],"h":"紫茉莉花斑：叶绿体突变，母系一路传下去"},{"k":["母系","细胞质"],"h":"细胞质遗传三不：不按 Mendel 比例、不分离、只随母走"}]}]},{"id":"g3","n":"突变·数量·群体","ks":[{"id":"quant","n":"数量性状与群体遗传","core":"<b>数量性状</b>：连续变异、受多基因控制（微效多基因）、易受环境影响。用<b>遗传率</b>衡量：\n<b>广义遗传率</b> H² = V_G/V_P；<b>狭义遗传率</b> h² = V_A/V_P（V_G = V_A + V_D + V_I，只有加性方差能稳定遗传）。\n<b>估算方法</b>：方差分析、亲子回归/相关、F₂ 与回交世代方差。\n<b>Hardy-Weinberg 平衡</b>：大群体、随机交配、无突变、无迁移、无选择时，基因频率与基因型频率代代不变：p²+2pq+q²=1。\n<b>应用</b>：由隐性患者频率 q² 推算携带者频率 2pq（如白化病 1/10000 → q=1/100，携带者≈1/50）。\n<b>改变频率的因素</b>：突变、选择（适合度、选择系数）、迁移、遗传漂变（小群体）、非随机交配。\n<b>近交系数</b> F：个体某座位两个等位基因同源相同的概率；近交使杂合子减少、纯合子增加。","keys":["数量性状","遗传率","广义遗传率","狭义遗传率","加性","Hardy","Hardy-Weinberg","基因频率","基因型频率","遗传漂变","适合度","近交","多基因"],"traps":["狭义遗传率只算加性方差 V_A，广义算全部 V_G——育种上关心狭义。","H-W 平衡要求随机交配 + 大群体 + 无选择/突变/迁移，缺一即打破。","隐性病发病率是 q²，携带者频率是 2pq，别把 q² 当 q。"],"hook":"数量性状：多基因、加性、连续分布；H²=Vg/Vp，狭义只算加性","hs":[{"k":["遗传率","遗传力","H2"],"h":"广义含全部遗传方差，狭义只含加性方差——所以狭义永远更小"},{"k":["Hardy","哈迪","平衡"],"h":"p²+2pq+q²=1，随机交配一代就平衡"},{"k":["近交","杂种优势"],"h":"近交衰退，杂交兴旺——同一个道理解释两头"},{"k":["广义遗传率","狭义遗传率"],"h":"广义 Vg/Vp 含全部，狭义只含加性——狭义小，但育种只看狭义"}]},{"id":"mutation","n":"基因突变与修复","core":"<b>类型</b>：点突变（转换/颠换、同义/错义/无义）、移码（插入或缺失非 3 倍数碱基）、动态突变（三核苷酸重复扩增，如 Huntington CAG）。\n<b>诱发因素</b>：物理（UV 形成<b>嘧啶二聚体</b>、X 射线断链）、化学（亚硝酸→脱氨、烷化剂、碱基类似物 5-BU、<b>吖啶类</b>→移码）、生物（转座子、病毒）。\n<b>修复</b>：<b>光复活</b>（光裂合酶直接解二聚体）、<b>切除修复</b>（NER 切一段、BER 切单个碱基，着色性干皮症 XP 缺 NER）、<b>错配修复</b>（MMR，MSH2 突变→遗传性非息肉结肠癌）、<b>重组修复</b>、<b>SOS 修复</b>（易错、保命但高突变）。\n<b>突变的性质</b>：随机、不定向、低频、可逆（回复突变）、多效、可累积；<b>突变的多方向性</b>与\"不定向\"不矛盾。\n<b>显性/隐性</b>：多数突变为隐性（需纯合或二次打击）；<b>LacI⁻</b> 是显性负效、<b>LacIˢ</b> 是超阻遏（显性）。","keys":["基因突变","点突变","移码","转换","颠换","无义突变","错义","嘧啶二聚体","切除修复","错配修复","SOS","诱变","吖啶","三核苷酸"],"traps":["UV 造成嘧啶二聚体，靠光复活或切除修复处理，不是错配修复。","移码突变由非 3 倍数插入/缺失或吖啶类引起，后果通常比点突变严重。","SOS 修复是易错修复，会提高突变率，不是保真机制。"],"hook":"转换=嘌呤换嘌呤，颠换=跨类；移码只看增减是不是 3 的倍数","hs":[{"k":["转换","颠换"],"h":"转换同类换，颠换跨类换——转换发生得更频繁"},{"k":["紫外","二聚体","胸腺嘧啶"],"h":"紫外造 TT 二聚体，光复活酶拿可见光一照就修好"},{"k":["SOS"],"h":"SOS 是拼命修法：能活下来，但错一堆"},{"k":["移码"],"h":"缺 1 或 2 个就移码；缺 3 个只少一个氨基酸，不移码"},{"k":["回复"],"h":"真回复变回原样；第二位点抑制是在别处补一刀"},{"k":["自发突变","5-溴尿嘧啶","亚硝酸"],"h":"5-BU 引发转换，亚硝酸脱氨——两个经典诱变剂各记一个机制"},{"k":["光复活"],"h":"光复活酶专修 TT 二聚体，拿可见光当能量"}]}]},{"id":"g4","n":"微生物与分子遗传","ks":[{"id":"micro","n":"细菌与噬菌体的遗传分析","core":"<b>细菌遗传物质转移</b>：\n①<b>转化</b>（Griffith 肺炎球菌、Avery）：感受态细胞摄取裸露 DNA，可被 DNase 破坏——证明 DNA 是遗传物质。\n②<b>接合</b>：供体 F⁺/Hfr × 受体 F⁻，通过<b>性菌毛</b>传递；Hfr 染色体整合后单向、高频传递，<b>中断杂交</b>可作染色体作图（时间单位=分钟）；F′ 携带部分染色体基因。\n③<b>转导</b>：<b>普遍转导</b>（P1 噬菌体，包装任意宿主 DNA 片段）、<b>局限转导</b>（λ，只转导靠近整合位点的基因）。\n<b>噬菌体</b>：烈性（裂解）/温和（溶原，整合为原噬菌体，可被 UV 诱导）；<b>转染</b>是噬菌体 DNA 感染。\n<b>互补测验</b>：两个突变共感染同一细胞后能否互补→判断是否同一顺反子（<b>顺反测验</b>：反式不互补则同一基因）。\n<b>重组与作图</b>：共转导频率、接合中断时间、重组频率均可作图。","keys":["转化","接合","转导","Hfr","F因子","性菌毛","感受态","溶原","裂解","互补测验","顺反","普遍转导","局限转导","噬螺体","噬菌体","Hershey","Chase","同位素标记","侵染","³²P","³⁵S"],"traps":["普遍转导包装任意片段，局限转导只转导整合位点附近——两者区分靠这一点。","Hfr 传递是单向、高频的，F⁺×F⁻ 只传质粒不传染色体。","互补测验判断\"是否同一基因\"，重组测验判断\"距离\"。"],"hook":"Hershey-Chase：³²P 进菌（DNA 进去了），³⁵S 留外面（蛋白没进）","hs":[{"k":["转化","Griffith","Avery"],"h":"Griffith 发现转化现象，Avery 证明转化因子是 DNA"},{"k":["转导"],"h":"普遍转导随便装宿主 DNA，局限转导只装旁边那一段"},{"k":["接合","Hfr","F质粒","F 质粒"],"h":"F⁺ 只给质粒，Hfr 给染色体（先给靠 origin 那头）"},{"k":["影印","平板影印"],"h":"影印培养法证明抗性突变是自发的，不是抗生素诱导的（Lederberg）"},{"k":["F因子","F 因子","性菌毛"],"h":"F 因子能整合进染色体就变 Hfr，一整合就爱传染色体"}]},{"id":"molecular","n":"分子遗传：复制转录翻译与 RNAi","core":"<b>DNA 复制</b>：半保留、半不连续、需引物；冈崎片段；真核多起点。\n<b>转录</b>：模板链/编码链；启动子；真核加工（帽子、polyA、剪接）。\n<b>翻译</b>：密码子简并、摆动；核糖体三个位点（A/P/E）。\n<b>RNAi</b>：dsRNA→Dicer 切成 siRNA→RISC 装载→<b>切割降解</b>靶 mRNA（siRNA）或<b>抑制翻译</b>（miRNA）；<b>基因沉默</b>，可遗传（线虫、植物）。\n<b>转座子</b>：Ac-Ds（玉米，McClintock）、P 元件（果蝇杂种不育）、Tn/IS（细菌）；复制型/非复制型。\n<b>限制-修饰系统</b>：限制酶切外源 DNA，甲基化保护自身。\n<b>基因编辑</b>：CRISPR-Cas9（sgRNA + Cas9 双链断裂 → NHEJ 敲除 / HDR 敲入）。","keys":["RNAi","siRNA","miRNA","Dicer","RISC","转座子","Ac-Ds","McClintock","基因沉默","复制","转录","翻译","CRISPR","限制酶"],"traps":["siRNA 靠 RISC 切割降解 mRNA；miRNA 主要抑制翻译——机制不同。","RNAi 发生在转录后（胞质），不是转录水平沉默。","转座子是 McClintock 在玉米中发现的 Ac-Ds 系统。"],"hook":"RNAi：Dicer 把 dsRNA 剪成小段，RISC 拿它去找互补的切掉","hs":[{"k":["转座子","Ac-Ds","Ds因子"],"h":"Ac 自己会跳，Ds 是残废，得 Ac 带着跳"},{"k":["CRISPR","Cas9"],"h":"CRISPR 是细菌的免疫记忆：guide RNA 领路，Cas9 下刀"},{"k":["中心法则","逆转录"],"h":"中心法则的例外：逆转录（RNA→DNA）、RNA 复制"}]},{"id":"dev","n":"个体发育的遗传控制","core":"<b>细胞决定</b>与<b>分化</b>：决定是潜能限定（可遗传、自主），分化是形态功能特化。\n<b>母体效应基因</b>（果蝇：bicoid 前端、nanos 后端）——mRNA 预先存于卵中决定体轴，属母性影响。\n<b>体节基因</b>：间隙基因（gap）→成对规则基因（even-skipped）→体节极性基因（engrailed）→<b>同源异型基因</b>（Hox，决定各体节器官性质）。\n<b>同源异型突变</b>：触角变腿（Antennapedia）、平衡棒变翅（bithorax）——\"器官长错位置\"。\n<b>程序性细胞死亡</b>：ced-3/ced-4（促）、ced-9（抑），线虫研究获诺奖；人类同源 Bcl-2 家族、caspase。\n<b>干细胞与克隆</b>：全能性（受精卵）、多能性（ES/iPS）、单能性；克隆羊 Dolly 证明体细胞核全能性。","keys":["细胞决定","分化","母体效应","bicoid","同源异型","Hox","Antennapedia","程序性死亡","凋亡","干细胞","全能性","克隆"],"traps":["母体效应基因的 mRNA 由<b>母本</b>提供，所以属母性影响，不是胚胎自己基因的早期表达。","同源异型突变是\"器官身份改变\"（触角变腿），不是数目改变。","决定先于分化；决定是可遗传的潜能限定，分化是表型特化。"],"hook":"母体效应基因定头尾，体节基因分节，同源异型基因定身份","hs":[{"k":["同源异型","触角"],"h":"同源异型 = 位置对、身份错（触角长成腿）"},{"k":["决定","分化"],"h":"决定在前（命运已定），分化在后（形态才变）"}]}]},{"id":"g5","n":"遗传学技术与发育","ks":[{"id":"tech","n":"遗传学技术识别","core":"<b>核酸杂交</b>：<b>Southern</b>=DNA（找 DNA 片段）、<b>Northern</b>=RNA（看表达量）、<b>Western</b>=蛋白（用抗体）。记忆：S-N-W 对应 D-R-P。\n<b>PCR</b>：变性-退火-延伸，需引物/dNTP/Mg²⁺/Taq；RT-PCR 先逆转录；qPCR 定量。\n<b>电泳</b>：琼脂糖（核酸，按大小）、SDS-PAGE（蛋白，按亚基分子量）、等电聚焦（pI）、双向电泳。\n<b>原位杂交</b>：定位染色体上的基因（FISH，荧光探针）。\n<b>基因功能研究</b>：基因敲除（KO）、敲低（RNAi）、过表达、CRISPR、转基因/敲入。\n<b>测序</b>：Sanger（ddNTP 终止）、NGS 二代、单分子测序。\n<b>作图与鉴定</b>：RFLP、SSR、SNP、AFLP 分子标记；核型分析、显带、FISH 检测染色体异常。","keys":["Southern","Northern","Western","FISH","原位杂交","PCR","qPCR","Sanger","RFLP","SSR","SNP","基因敲除","测序","分子标记"],"traps":["Southern 是 DNA、Northern 是 RNA、Western 是蛋白——这是送分题，别记反。","FISH 用荧光探针原位定位染色体，不是测序技术。","基因敲除改变 DNA 序列，基因敲低（RNAi）只降表达不改变序列。"],"hook":"DNA 用 Southern，RNA 用 Northern，蛋白用 Western——S/N/W 对应 D/R/P 反着来","hs":[{"k":["PCR"],"h":"PCR 三步循环：变性、退火、延伸；Taq 耐热是灵魂"},{"k":["限制酶","回文"],"h":"限制酶认回文序列，切出黏性末端才好连"},{"k":["RFLP"],"h":"RFLP = 切出来的片段长短不一，拿来当分子标记"},{"k":["Southern","Northern","Western"],"h":"DNA-S、RNA-N、蛋白-W：S/N/W 跟 D/R/P 正好反着排"},{"k":["原位杂交","FISH"],"h":"FISH 用荧光探针直接贴在染色体上看位置"}]}]}]},{"id":"english","n":"英语 CET-6","ic":"🔤","cl":"#0a84ff","chs":[{"id":"e1","n":"词汇","ks":[{"id":"en-vocab","n":"CET-6 词汇：主题网络记忆","core":"单词不要孤立背，按<b>主题网络</b>打包记：一个主题 10 个词，词与词之间靠场景串联，回忆时能\"顺藤摸瓜\"。\n<b>三步法</b>：①先认词族（academic / academia / academically）②记搭配不记中文（<b>impose a ban on</b> 比\"实施禁令\"牢）③造句一次胜过看十遍。\n<b>高频词根</b>：-spect（看）、-tract（拉）、-mit/-miss（送）、-duc（引）、-vert（转）、-cept（拿）、-fer（带）、-pos（放）。\n<b>易混对</b>：affect/effect、principal/principle、complement/compliment、adapt/adopt、respectable/respectful。\n<b>六级阅读核心</b>：态度词（skeptical、indifferent、objective）、逻辑词（nevertheless、consequently）、程度词（virtually、merely）。","keys":["词根","词汇","搭配","易混","同义词","辨析"],"traps":["背单词只看中文释义，考场上认不出搭配——六级考的是搭配和语境。","affect 是动词、effect 是名词（effect 作动词意为\"实现\"）。"],"hook":"记词根一次记一串：spect 看、port 运、dict 说、tract 拉、ject 扔","hs":[{"k":["spect"],"root":1,"h":"spect=看：inspect 往里看=检查｜respect 回头看=尊重｜prospect 往前看=前景"},{"k":["port"],"root":1,"h":"port=运：transport 运过去｜import 运进来｜export 运出去｜support 从下面托"},{"k":["dict"],"root":1,"h":"dict=说：predict 预先说=预言｜dictate 口述｜contradict 反着说=反驳"},{"k":["tract"],"root":1,"h":"tract=拉：attract 拉过来=吸引｜distract 拉散=分心｜extract 拉出来=提取"},{"k":["ject"],"root":1,"h":"ject=扔：reject 扔回去=拒绝｜inject 扔进去=注射｜project 往前扔=投射/项目"},{"k":["mit","miss"],"root":1,"h":"mit/miss=送：submit 送上去=提交｜transmit 送过去=传播｜dismiss 送走=解散"},{"k":["struct"],"root":1,"h":"struct=建：construct 建起来｜instruct 往里建=指导｜destroy 反着建=摧毁"},{"k":["scribe","script"],"root":1,"h":"scrib=写：describe 写下来=描述｜prescribe 预先写=开处方｜subscribe 下面写=订阅"},{"k":["vert","vers"],"root":1,"h":"vert=转：convert 转过来=转换｜reverse 反着转=倒转｜diverse 转向各处=多样"},{"k":["tain","tent"],"root":1,"h":"tain=握：contain 握在一起=包含｜maintain 用手握=维持｜obtain 拿到手"},{"k":["flu"],"root":1,"h":"flu=流：influence 流进来=影响｜fluent 流利｜fluid 流体"},{"k":["gress","grad"],"root":1,"h":"gress=走：progress 往前走=进步｜congress 走到一起=国会｜aggressive 往前冲=好斗"},{"k":["spir"],"root":1,"h":"spir=呼吸：inspire 吸进来=启发｜expire 呼出去=到期｜conspire 同呼吸=共谋"},{"k":["duc","duct"],"root":1,"h":"duc=引导：conduct 一起引=指挥｜produce 往前引=生产｜reduce 引回来=减少"},{"k":["cap","cept","ceive"],"root":1,"h":"cept=拿：accept 拿过来=接受｜receive 接住｜concept 抓住的东西=概念"},{"k":["pos","pon"],"root":1,"h":"pos=放：compose 放一起=组成｜expose 放出去=暴露｜propose 放前面=提议"},{"k":["academic"],"h":"academy（学院）+ -ic → 学术的；academic performance 学业成绩"},{"k":["curriculum"],"h":"curr-（跑）+ -culum → 要跑完的一圈课 = 课程体系"},{"k":["compulsory"],"h":"compel（强迫）的亲戚 → 必修的、强制的"},{"k":["faculty"],"h":"faculty 两副面孔：全体教员 / 能力天赋"},{"k":["obesity"],"h":"obese（肥胖）的名词；o- 圆 + ese → 圆滚滚"}]}]},{"id":"e2","n":"听力","ks":[{"id":"en-listen","n":"CET-6 听力：场景预判与信号词","core":"听力不是\"听懂每个词\"，而是<b>预判 + 抓信号</b>。\n<b>做题流程</b>：读选项（划名词/数字/态度词）→ 预判场景（校园/职场/医疗/租房）→ 听开头 1 句定场景 → 抓<b>转折与结论</b>。\n<b>信号词</b>：but / however / actually / in fact（后面才是答案）；so / therefore / that's why（结论）；Well / You know（口语停顿，后面常出观点）。\n<b>同义替换</b>是核心考点：选项 rarely 用原词，如原文 \"I'm broke\" → 选项 \"short of money\"。\n<b>数字题</b>：先记所有数字，再按问题筛选；注意 double、half、a quarter、twice as much。\n<b>长对话/讲座</b>：开头定主题、结尾定态度；听到列举（first, second）立刻准备多选题。\n<b>精听法</b>：一句一停，写关键词，再复述；错题回听找\"没听出来的那个词\"，通常是连读或弱读。","keys":["听力","信号词","同义替换","场景","数字","转折","精听"],"traps":["答案常在 but/however 之后，前半句是干扰项。","选项用同义替换而不是原词，听到原词反而是陷阱。"],"hook":"听力别等听清每个词：先看选项猜场景，场景一出，词就自己冒出来","hs":[{"k":["图书馆","借书","overdue"],"h":"图书馆场景三件套：borrow / due / overdue fine（罚款）"},{"k":["餐厅","点餐","menu"],"h":"餐厅：book a table（订位）→ order → bill / split the bill（AA）"},{"k":["面试","简历","apply"],"h":"面试：apply for → resume（简历）→ qualification → salary"},{"k":["租房","公寓","landlord"],"h":"租房：landlord / tenant、deposit（押金）、utilities（水电）"}]}]},{"id":"e3","n":"写作","ks":[{"id":"en-writing","n":"CET-6 写作：三段框架与高分句","core":"<b>结构</b>（30 分钟，150–200 词）：第一段描述/引出（2–3 句）→ 第二段论证（观点 + 2 个理由 + 例证，5–7 句）→ 第三段总结 + 建议（2–3 句）。\n<b>开篇</b>：As is vividly depicted in the cartoon, ... / It is universally acknowledged that ...\n<b>论证</b>：On the one hand ... on the other hand ...；A case in point is ...；What deserves special attention is ...\n<b>因果</b>：This is chiefly attributed to ...；... which in turn gives rise to ...\n<b>让步</b>：Admittedly, ... Nevertheless, ...\n<b>结尾</b>：Only in this way can we ...（倒装）；It is high time that we took effective measures to ...\n<b>加分项</b>：非谓语作状语、定语从句、被动、插入语；避免 I think / very / good 这类初级词（换 hold the view that / exceedingly / beneficial）。\n<b>扣分项</b>：拼写错误、时态混乱、模板堆砌无内容、字数不足。","keys":["写作","句型","倒装","框架","论证","模板"],"traps":["只用模板不填具体内容，分数上不去——每段至少 1 个具体例子。","Only in this way 后必须倒装（can we），这是固定结构。"],"hook":"三段走：引入一句套话、论证一句倒装、收尾一句让步——三句撑起一篇","hs":[{"k":["Only in this way"],"h":"Only + 状语放句首，主句必须倒装：Only in this way can we…"},{"k":["acknowledged"],"h":"It is universally acknowledged that…（万能开头，但一篇只能用一次）"},{"k":["drawbacks","缺点"],"h":"…is not without its drawbacks, though.（双重否定=并非没有缺点）"}]}]},{"id":"e4","n":"翻译","ks":[{"id":"en-translate","n":"CET-6 翻译：中国文化与社会话题","core":"<b>评分核心</b>：意思准确 > 语法正确 > 用词高级。宁可简单句写对，不要复杂句写错。\n<b>四步</b>：①断句（中文长句拆成 2–3 个英文短句）②定主谓（找每句的核心动作）③补连接（which / that / with / 分词）④查搭配。\n<b>文化高频</b>：四大发明 the Four Great Inventions、丝绸之路 the Silk Road、京剧 Peking Opera、书法 calligraphy、剪纸 paper-cutting、二十四节气 the 24 Solar Terms、非物质文化遗产 intangible cultural heritage、列入世界遗产名录 be inscribed on the World Heritage List。\n<b>社会高频</b>：高铁 high-speed railway、移动支付 mobile payment、共享经济 sharing economy、脱贫攻坚 poverty alleviation、碳中和 carbon neutrality、城镇化 urbanization。\n<b>句式</b>：中文\"……的\"多用定语从句或分词；\"随着……\"→ With the development of ...；\"不仅……而且\"→ not only ... but also（倒装可加分）。","keys":["翻译","文化","句式","搭配","专有名词"],"traps":["专有名词拼错直接扣分，文化类词必须背准（如 the Four Great Inventions 首字母大写）。","中文流水句直译成一句英文会语法崩溃，必须先断句。"],"hook":"文化词死记官方译法，句式多用被动和无主句——中文主语常常不用译出来","hs":[{"k":["World Heritage","遗产"],"h":"be inscribed on the World Heritage List（列入世界遗产名录）——真题原句"},{"k":["高速","high-speed"],"h":"China's high-speed railway network（中国高铁网络）——社会发展必背"}]}]}]}]};

/* ==================== 状态存储 ==================== */
const LSKEY = 'xzt_hub_v1';
let S = load();

function load(){
  try{
    const d = JSON.parse(localStorage.getItem(LSKEY) || '{}');
    return Object.assign({
      cards:{}, daily:{}, streak:0, lastDate:null, lastCheckin:null,
      goal:{new:10, rev:20}, todayNew:0, todayRev:0, hw:{}, hwThumb:{}, hwOpt:{onlyPen:0}
    }, d);
  }catch(e){
    return {cards:{}, daily:{}, streak:0, lastDate:null, lastCheckin:null, goal:{new:10, rev:20}, todayNew:0, todayRev:0, hw:{}, hwThumb:{}, hwOpt:{onlyPen:0}};
  }
}
function save(){ localStorage.setItem(LSKEY, JSON.stringify(S)); ghTouch(); }

function today(){
  const d=new Date();
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}

/* ==================== 工具 ==================== */
function esc(s){
  return String(s==null?'':s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/\n/g,'<br>');
}
function escA(s){  /* 属性上下文转义：引号也处理，用于任何来自云端/本机的数据拼进 HTML 属性 */
  return String(s==null?'':s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function toast(msg,ms){
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove('show'), ms||1800);
}
function shuffle(arr){
  const a=arr.slice();
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
const TYPE_LABEL={term:'名词',mc:'选择',tf:'判断',fill:'填空',saq:'简答',essay:'论述',calc:'计算',input:'计算'};

/* 卡片状态 */
function cst(id){ return S.cards[id] || {st:0, hit:0, lv:0, due:null, fav:0}; }
function setCard(id, patch){ S.cards[id] = Object.assign(cst(id), patch, {t:Date.now()}); save(); }

/* 统计 */
function stats(deckId){
  let total=0, mastered=0, seen=0, wrong=0, guessed=0;
  for(const c of HUB.cards){
    if(deckId && c.deck!==deckId) continue;
    total++;
    const st=cst(c.id);
    if(st.st===1){ mastered++; seen++; }            // 只有"确定会"才算掌握
    else if(st.st===2){ seen++; }                    // 模糊：学过但没掌握
    else if(st.st<0){ seen++; wrong++; }
    else if((st.g||0)>0){ seen++; guessed++; }       // 蒙对：接触过，但不掌握
  }
  return {total, mastered, seen, wrong, guessed};
}

/* ==================== v10 记忆钩子 ==================== */
function hookOf(c){
  if(!c) return null;
  if(c.h) return {t:c.h, sub:''};
  if(c.k && c.k.length){
    var k = knowById(c.k[0]);
    if(k && k.hook) return {t:k.hook, sub:'本块总钩 · 点知识点看细节'};
  }
  return null;
}
function hookHtml(c){
  var x = hookOf(c);
  if(!x) return '';
  return '<div class="hk-box"><div class="hk-h">⚡ 记忆钩子</div>'+
    '<div class="hk-t">'+esc(x.t)+'</div>'+
    (x.sub?'<div class="hk-sub">'+x.sub+'</div>':'')+'</div>';
}
function hookCount(){
  var n=0;
  knowAll().forEach(function(k){ n += 1 + ((k.hs&&k.hs.length)||0); });
  return n;
}
function hookCover(){ return HUB.cards.filter(function(c){return c.h;}).length; }

/* ===== v34：学长笔记 × 生化题卡联动 ===== */
function notesAnchor(c){
  var t=(c.q||'')+' '+((Array.isArray(c.a)?c.a.join(' '):c.a)||'')+' ';
  if(c.k&&c.k.length){ var kk=knowById(c.k[0]); if(kk) t+=' '+(kk.n||''); }
  if(/核酸|核苷酸|DNA|RNA|复制|转录|翻译|密码|突变|半保留|逆转录|核糖|碱基|Tm|Chargaff/i.test(t)) return ['p2','核酸化学'];
  if(/酶|辅因子|维生素|抑制剂|米氏|活性中心|变构|活力|\bKm\b/i.test(t)) return ['p3','酶化学'];
  if(/脂肪酸|脂肪|磷脂|胆固醇|生物膜|脂.{0,3}氧化|酮体|类脂/i.test(t)) return ['p6','脂代谢'];
  if(/糖|糖原|酵解|三羧|TCA|戊糖|血糖/i.test(t)) return ['p5','代谢与糖代谢'];
  if(/氨基酸|蛋白质|肽|螺旋|折叠|变性|盐析|电泳|层析|等电点|疏水/i.test(t)) return ['p1','氨基酸与蛋白质'];
  if(/膜|通道|转运|流动镶嵌/i.test(t)) return ['p4','糖·脂·膜'];
  return null;
}
function notesLinkHtml(c){
  var dk=null;
  for(var i=0;i<HUB.decks.length;i++){ if(HUB.decks[i].id===c.deck){ dk=HUB.decks[i]; break; } }
  if(!dk||dk.subject!=='生化') return '';
  var a=notesAnchor(c);
  if(!a) return '';
  return '<button class="mini-btn" style="margin:0 0 12px" onclick="event.stopPropagation();goNotes(\''+a[0]+'\')">📖 学长笔记·'+a[1]+'</button>';
}
function goNotes(a){ location.href='./notes-biochem.html'+(a?('#'+a):''); }

var HK_TAB = 'list';
function setHkTab(t){ HK_TAB=t; renderHook(); }

function renderHook(){
  var linked = HUB.cards.filter(function(c){return c.h;});
  document.getElementById('hookSub').textContent =
    hookCount()+' 条 · 覆盖 '+linked.length+' 张题';

  var h = '<div class="hk-tabs">'+
    '<button class="'+(HK_TAB==='list'?'on':'')+'" onclick="setHkTab(\'list\')">📚 全部钩子</button>'+
    '<button class="'+(HK_TAB==='quiz'?'on':'')+'" onclick="setHkTab(\'quiz\')">🎯 钩子自测</button>'+
    '</div>';

  if(HK_TAB==='quiz'){ h += '<div id="hqBox"></div>'; document.getElementById('hookBody').innerHTML=h; hookQuizInit(); return; }

  // 按学科分组
  KNOW.subjects.forEach(function(sj){
    var ks=[];
    sj.chs.forEach(function(ch){ ch.ks.forEach(function(k){ if(k.hook) ks.push({k:k,ch:ch.n}); }); });
    if(!ks.length) return;
    h += '<div class="hkg"><div class="hkg-h"><b>'+esc(sj.ic+' '+sj.n)+'</b><span>'+ks.length+' 个知识点</span></div>';
    ks.forEach(function(it){
      var k=it.k;
      var cnt = knowCards(k.id).filter(function(c){return c.h && c.hk===k.id;}).length;
      h += '<div class="hkg-main" onclick="openKD(\''+k.id+'\')" style="cursor:pointer">'+
        '<div class="hkg-h" style="margin:0 0 6px"><b style="font-size:13.5px">'+esc(k.n)+'</b>'+
        '<span>'+esc(it.ch)+(cnt?(' · '+cnt+' 题'):'')+'</span></div>'+
        '<div class="hk-t">'+esc(k.hook)+'</div></div>';
      if(k.hs && k.hs.length){
        h += '<div class="hk-list" style="margin:0 0 12px">';
        k.hs.slice(0,3).forEach(function(x){ h += '<div class="hk-item">'+esc(x.h)+'</div>'; });
        h += '</div>';
      }
    });
    h += '</div>';
  });
  document.getElementById('hookBody').innerHTML = h;
}

/* 钩子自测：看题干 → 先回忆 → 揭开钩子 */
var HQ = {list:[], i:0, shown:false};
function hookQuizInit(){
  if(!HQ.list.length){
    HQ.list = HUB.cards.filter(function(c){return c.h;});
    for(var i=HQ.list.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=HQ.list[i]; HQ.list[i]=HQ.list[j]; HQ.list[j]=t; }
    HQ.i=0; HQ.shown=false;
  }
  renderHQ();
}
function hookNext(){
  HQ.i = (HQ.i+1) % Math.max(HQ.list.length,1);
  HQ.shown=false; renderHQ();
}
function hookReveal(){ HQ.shown=true; renderHQ(); }
function renderHQ(){
  var box=document.getElementById('hqBox'); if(!box) return;
  var c=HQ.list[HQ.i];
  if(!c){ box.innerHTML='<div class="weak-none">还没有钩子数据。</div>'; return; }
  var k = c.hk ? knowById(c.hk) : null;
  var tag = (k?k.n:'') + ' · ' + (c.deck||'');
  var h = '<div class="hq-card">'+
    '<div class="hq-tag">第 '+(HQ.i+1)+' / '+HQ.list.length+' 条 · '+esc(tag)+'</div>'+
    '<div class="hq-q">'+esc(String(c.q).slice(0,90))+'</div>';
  if(HQ.shown){
    h += '<div class="hq-a"><div class="hk-box" style="margin:0"><div class="hk-h">⚡ 钩子</div>'+
      '<div class="hk-t">'+esc(c.h)+'</div></div></div>';
  }else{
    h += '<div class="hq-hint">先自己回忆这条考点的口诀，再点开对一下。</div>'+
      '<div class="hq-a"><button class="hq-reveal" onclick="hookReveal()">👀 揭开钩子</button></div>';
  }
  h += '</div>';
  h += '<div style="display:flex;gap:10px;margin-top:14px">'+
    '<button class="hq-reveal" style="flex:1;border-style:solid" onclick="hookNext()">下一条 →</button></div>'+
    '<div class="hq-info">已看过 '+(HQ.i+1)+' / '+HQ.list.length+'</div>';
  box.innerHTML=h;
  if(HQ.shown){
    var b=box.querySelector('.hq-a'); if(b) b.scrollIntoView({block:'nearest'});
  }
}

/* ==================== 视图切换 ==================== */
function go(v){
  document.querySelectorAll('.view').forEach(x=>x.classList.remove('active'));
  const el=document.getElementById('view-'+v); if(el) el.classList.add('active');
  document.getElementById('navHome').classList.toggle('on', v==='home');
  const nk=document.getElementById('navKnow'); if(nk) nk.classList.toggle('on', v==='know'||v==='kd'||v==='hook'||v==='term'||v==='read');
  document.getElementById('navStudy').classList.toggle('on', v==='study'||v==='examPick'||v==='exam'||v==='spell'||v==='wb');
  const ns=document.getElementById('navStat'); if(ns) ns.classList.toggle('on', v==='stat');
  document.getElementById('navSet').classList.toggle('on', v==='set');
  if(v==='home') renderHome();
  if(v==='set') renderSet();
  if(v==='stat') renderStat();
  if(v==='examPick') renderExamPick();
  if(v==='wb') renderWB();
  if(v==='mix') renderMix();
  if(v==='spell' && !SP.list.length) startSpell();
  if(v!=='exam' && typeof EX!=='undefined' && (EX.on || EX.timer)){   /* 中途离开 = 弃考，计时停掉 */
    if(EX.timer){ clearInterval(EX.timer); EX.timer=null; }
    EX.on=false;
  }
  if(v==='know') renderKnow();
  if(v==='hook') renderHook();
  if(v==='search') doSearch();
  if(v==='term') renderTerm();
  if(v==='read'){ READ.ch=null; READ.from=null; renderRead(); }   // 从导航进来总是先看章节目录
  if(v!=='kd' && v!=='study' && v!=='read'){ inkDetach(); }
  window.scrollTo(0,0);
}

/* ==================== 首页 ==================== */
function renderHome(){
  const all=stats(null);
  const pct = all.total ? Math.round(all.mastered/all.total*100) : 0;
  document.getElementById('ringPct').textContent = pct+'%';
  document.getElementById('ringLbl').textContent = all.mastered+' / '+all.total+' 张已掌握';
  const C=2*Math.PI*45;
  document.getElementById('ringProg').style.strokeDashoffset = C*(1-pct/100);

  let dueCnt=0;
  for(const c of HUB.cards){ const s=cst(c.id); if(s.st!==0 && s.due && s.due<=today()) dueCnt++; }
  const dueEl=document.getElementById('dueNum'); if(dueEl) dueEl.textContent=dueCnt;
  document.getElementById('homeSub').textContent =
    '共 '+HUB.decks.length+' 个题库 · '+all.total+' 张卡 · 错题 '+all.wrong+' 张'+
    (dueCnt? ' · 待复习 '+dueCnt+' 张' : '');

  const d=new Date();
  document.getElementById('todayDate').textContent =
    (d.getMonth()+1)+'月'+d.getDate()+'日';

  /* v20：不再有每日配额，主按钮永远指向「现在最该做的事」 */
  const freshN=HUB.cards.filter(c=>{ const s=cst(c.id); return s.st===0 && !(s.g>0); }).length;
  let ttl='🔁 该复习了', why='按遗忘曲线，这些卡今天到期。答完自动排下一次。', btn='开始复习 '+dueCnt+' 张';
  if(!dueCnt && freshN){
    ttl='📖 接着往下刷';
    why='今天没有到期的卡，直接推进没碰过的题。';
    btn='开始 '+Math.min(freshN,20)+' 张新题';
  }else if(!dueCnt && !freshN){
    ttl='🎲 全都过了一遍';
    why='没有到期卡，也没有没碰过的题。随机抽一组保持手感。';
    btn='随机 20 题';
  }
  if(all.wrong) why += '　另有 '+all.wrong+' 张错题待重刷。';
  document.getElementById('taskTitle').textContent=ttl;
  document.getElementById('taskWhy').textContent=why;
  document.getElementById('taskMainBtn').textContent=btn;

  // 题库列表
  const subjColor={生化:'#34c759', 遗传:'#bf5af2', 数学:'#ff9f0a', 英语:'#0a84ff'};
  const iconMap={'生化':'🧬','遗传':'🧪','数学':'📐','英语':'🔤'};
  let html='';
  /* v31：学长笔记入口 */
  html+='<div class="deck-item" onclick="location.href=\'./notes-biochem.html\'">'
    +'<div class="deck-icon" style="background:#ffd60a22">📖</div>'
    +'<div class="deck-info"><div class="d-name">学长笔记 · 生物化学（精校版）</div>'
    +'<div class="d-meta">手写笔记 68 页全转录 · 788 处已校对</div></div>'
    +'<div class="deck-go">▶</div></div>';
  /* v37：公式识别（手写/拍照，离线 Texify2 + AI 批改） */
  html+='<div class="deck-item" onclick="location.href=\'./math-ocr.html\'">'
    +'<div class="deck-icon" style="background:#64d2ff22">📐</div>'
    +'<div class="deck-info"><div class="d-name">公式识别 · 手写 / 拍照</div>'
    +'<div class="d-meta">离线识别公式，或 AI 批改解题过程</div></div>'
    +'<div class="deck-go">▶</div></div>';
  /* v33：投稿箱入口 */
  html+='<div class="deck-item" onclick="subGo()">'
    +'<div class="deck-icon" style="background:#5fb0ff22">📮</div>'
    +'<div class="deck-info"><div class="d-name">投稿箱 · 有笔记/卷子给站长？</div>'
    +'<div class="d-meta">登录后点这里上传，只有站长能收</div></div>'
    +'<div class="deck-go">▶</div></div>';
  for(const dk of HUB.decks){
    const s=stats(dk.id);
    const p=s.total?Math.round(s.mastered/s.total*100):0;
    const color=subjColor[dk.subject]||'#64d2ff';
    html+=`<div class="deck-item" onclick="startDeck('${dk.id}')">
      <div class="deck-icon" style="background:${color}22">${iconMap[dk.subject]||'📘'}</div>
      <div class="deck-info">
        <div class="d-name">${esc(dk.name)}${dk.tier==='kao'?' <span class="kao-tag">考研</span>':''}</div>
        <div class="d-meta">${s.total} 张 · 已看 ${s.seen} · 错题 ${s.wrong}</div>
      </div>
      <div class="deck-pct" style="color:${color}">${p}%</div>
      <div class="deck-go">▶</div>
    </div>`;
  }
  document.getElementById('deckList').innerHTML=html;

  // 学科统计
  const subj={};
  for(const c of HUB.cards){
    const dk=HUB.decks.find(x=>x.id===c.deck);
    const k=dk?dk.subject:'其他';
    if(!subj[k]) subj[k]={total:0,mastered:0};
    subj[k].total++;
    if(cst(c.id).st>0) subj[k].mastered++;
  }
  let sh='';
  for(const k in subj){
    const s=subj[k], p=Math.round(s.mastered/s.total*100);
    const color=subjColor[k]||'#64d2ff';
    sh+=`<div class="deck-item" style="cursor:default">
      <div class="deck-icon" style="background:${color}22">${iconMap[k]||'📘'}</div>
      <div class="deck-info"><div class="d-name">${k}</div>
        <div class="d-meta">${s.mastered} / ${s.total} 张已掌握</div></div>
      <div class="deck-pct" style="color:${color}">${p}%</div>
    </div>`;
  }
  document.getElementById('subjList').innerHTML=sh;

  // v8：首页直接告诉你现在最虚哪块
  var hw=document.getElementById('homeWeak');
  if(hw){
    try{
      var wk=weakList(1);
      if(wk.length){
        var x=wk[0];
        hw.style.display='block';
        hw.innerHTML='<div class="home-weak" onclick="openKD(\''+x.k.id+'\')">'+
          '<div class="hw-t">⚠️ 你现在最虚的一块</div>'+
          '<div class="hw-n">'+esc(x.k.n)+'</div>'+
          '<div class="hw-m">错 '+x.s.wrong+' 张 · 学过 '+x.s.seen+'/'+x.s.t+' 张 · 掌握 '+x.p+'%　→ 点开看讲解</div></div>';
      }else{ hw.style.display='none'; }
    }catch(e){ hw.style.display='none'; }
  }
}

/* ==================== 刷题引擎 ==================== */
let Q=[];        // 当前队列（卡片对象数组）
let qi=0;        // 当前索引
let flipped=false;
let mode='card'; // card | quiz
let lastScore={right:0, wrong:0};
let todayCounted={new:0, rev:0};
let retrySet=new Set();

function pickQueue(kind){
  const cards=HUB.cards.slice();
  let q=[];
  if(kind==='wrong'){
    q=shuffle(cards.filter(c=>cst(c.id).st<0));
    if(!q.length){ toast('还没有错题，先去刷一轮 💪'); return null; }
    todayCounted=null;
  }else if(kind==='random'){
    const core=cards.filter(c=>!isKao(c));
    q=shuffle(core.length?core:cards).slice(0,20); /* 随机练习默认只抽课堂层 */
    todayCounted=null;
  }else if(kind==='deck'){
    const id=arguments[1];
    q=cards.filter(c=>c.deck===id);
    // 错题/没见过优先
    q.sort((a,b)=>{
      const sa=cst(a.id).st, sb=cst(b.id).st;
      return (sa<=0?0:1)-(sb<=0?0:1);
    });
    todayCounted=null;
  }
  return q;
}

function startWrong(){ const q=pickQueue('wrong'); if(q){ startSession(q,'错题重刷', 'wrong'); } }
function startRandom(){ const q=pickQueue('random'); if(q){ startSession(q,'随机练习', 'random'); } }
function startDeck(id){
  const q=pickQueue('deck', id);
  const dk=HUB.decks.find(x=>x.id===id);
  if(q && q.length) startSession(q, dk?dk.name:'刷题', 'deck');
}

function startSession(q, title, kind){
  Q=q; qi=0; flipped=false; lastScore={right:0,wrong:0}; retrySet=new Set();
  todayCounted={new:0, rev:0}; /* 每次开练重置今日计数：pickQueue 各分支会把它置 null，不重置则今日新题/复习数永久归零 */
  document.getElementById('studyTitle').textContent=title;
  document.getElementById('studySub').textContent=q.length+' 张 · 左右滑动切换';
  go('study');
  renderCard();
}

function exitStudy(){ go('home'); }

let OPT_MAP=null; // 刷题模式选择题乱序映射：显示位置 -> 原始索引（防背位置）
function renderCard(){
  if(qi>=Q.length){ renderDone(); return; }
  const c=Q[qi];
  flipped=false;
  OPT_MAP=null;
  mode = (c.t==='mc'||c.t==='tf') ? 'quiz' : 'card';
  document.getElementById('studyMode').textContent = mode==='quiz'?'答题':'卡片';
  document.getElementById('studyPos').textContent = (qi+1)+'/'+Q.length;

  // 进度条
  let bh='';
  for(let i=0;i<Math.min(Q.length,40);i++){
    bh+='<i class="'+(i<qi?'done':(i===qi?'cur':''))+'"></i>';
  }
  document.getElementById('studyBar').innerHTML=bh;

  const isExam = c.c && c.c.indexOf('考研')>=0;
  const favOn = cst(c.id).fav ? 1 : 0;
  let h='<div class="card-top"><div class="card-tag'+(isExam?' exam':'')+'">'+
    (TYPE_LABEL[c.t]||c.t)+(c.c?' · '+esc(c.c):'')+(KAO_DECKS.has(c.deck)?'<span class="kao-tag">考研</span>':'')+'</div>'+
    '<div style="display:flex;align-items:center;gap:8px">'+
    (hasEn(c.q)?'<button class="spk-btn" onclick="event.stopPropagation();speakCard()" title="朗读">🔊</button>':'')+
    (Array.isArray(c.k)&&c.k.length?'<button class="kd-link" onclick="event.stopPropagation();readForKid(\''+c.k[0]+'\')">📖 讲解</button>':'')+
    '<button class="fav-star'+(favOn?' on':'')+'" onclick="event.stopPropagation();toggleFav()">'+
    (favOn?'★':'☆')+'</button></div></div>';
  h+='<div class="card-q">'+termify(c.q)+'</div>';
h+=(c.img?'<div class="card-img" onclick="event.stopPropagation();imgFull(this.querySelector(\'img\').src,\''+(c.c||'题图')+' · 点开可缩放\')"><img src="'+esc(c.img)+'" loading="lazy" alt="题图"></div>':'');

  // 填空题干显示下划线（已在 q 里包含）
  document.getElementById('flashcard').innerHTML=h;

  const act=document.getElementById('actRow');
  if(mode==='quiz'){
    // 选项按钮
    if(c.t==='tf'){
      let oh='';
      ['对','错'].forEach((o,i)=>{
        oh+='<button class="opt" data-i="'+i+'"><span class="letter">'+(i?'✗':'✓')+'</span>'+o+'</button>';
      });
      document.getElementById('flashcard').innerHTML=h+'<div class="opts">'+oh+'</div>';
      document.getElementById('flashcard').querySelectorAll('.opt').forEach(el=>{
        el.onclick=()=>pickOpt(parseInt(el.dataset.i));
      });
    }else{
      let oh='';
      const letters='ABCDEFGH';
      // 选项乱序：每次进这张卡顺序都不同，防止背位置
      OPT_MAP=(c.o||[]).map((_,i)=>i);
      for(let i=OPT_MAP.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[OPT_MAP[i],OPT_MAP[j]]=[OPT_MAP[j],OPT_MAP[i]];}
      OPT_MAP.forEach((oi,i)=>{
        oh+='<button class="opt" data-i="'+i+'"><span class="letter">'+letters[i]+'</span>'+termify(c.o[oi])+'</button>';
      });
      document.getElementById('flashcard').innerHTML=h+'<div class="opts">'+oh+'</div>';
      document.getElementById('flashcard').querySelectorAll('.opt').forEach(el=>{
        el.onclick=()=>pickOpt(parseInt(el.dataset.i));
      });
    }
    act.innerHTML='';
    return;
  }

  if(c.t==='fill' && String(c.q).indexOf('__')>=0){ renderFillCard(c); return; }

  if(c.t==='input'){
    let sh='<div class="subs-box">';
    (c.subs||[]).forEach((s,i)=>{
      sh+='<div class="sub-row"><label>'+esc(s.label)+'</label>'+
        '<input id="sub'+i+'" type="text" inputmode="decimal" placeholder="？"></div>';
    });
    sh+='</div>';
    document.getElementById('flashcard').innerHTML=h+sh;
    act.innerHTML='<button class="act-btn next" onclick="checkInput()">检查答案</button>';
    return;
  }

  // 普通翻卡：先回忆，再核对
  c._recHint = (c.t==='term' && isEnWord(c.q)) ? '这是英文单词：写它的中文意思，想练拼写点下面 ⌨️'
             : (c.t==='term') ? '名词：写它的定义要点（是什么 + 关键特征）'
             : (c.t==='essay'||c.t==='saq') ? '写答题要点，能写几条写几条'
             : (c.t==='calc') ? '写下公式或关键一步'
             : '写关键词就行';
  document.getElementById('flashcard').innerHTML +=
    '<div class="rec-box">'+
      '<div class="rec-t">✍️ 先凭记忆写 —— <span>'+esc(c._recHint)+'</span></div>'+
      '<textarea id="recArea" class="rec-area" rows="1" autocomplete="off" autocapitalize="off" spellcheck="false" '+
        'placeholder="写不出来就点下面「直接看答案」，但那样不算会"></textarea>'+
    '</div>';
  const ra=document.getElementById('recArea');
  if(ra){
    ra.addEventListener('input', function(){
      this.style.height='auto';
      this.style.height=Math.min(this.scrollHeight, 160)+'px';
    });
  }
  if(c.t==='term' && isEnWord(c.q)){
    document.getElementById('flashcard').innerHTML +=
      '<button class="spk-line" onclick="event.stopPropagation();startSpellOne(\''+c.id+'\')">⌨️ 练这个词的拼写</button>';
  }
  act.innerHTML= (HW_TYPES[c.t] ? '<button class="act-btn hwbtn" onclick="openHW(\'write\')">'+
      ((S.hw&&S.hw[c.id])?'✏️ 我的笔迹':'✏️ 手写作答')+'</button>' : '')+
    '<button class="act-btn" onclick="flipCard(0)">👀 直接看答案</button>'+
    '<button class="act-btn recall" onclick="flipCard(1)">✍️ 写完了，对答案</button>';
}

function flipCard(fromRecall){
  if(flipped) return;
  const c=Q[qi];
  let txt='';
  try{ const ta=document.getElementById('recArea'); if(ta) txt=ta.value; }catch(e){}
  if(fromRecall && !String(txt).trim()){
    toast('先写两个关键词；不想写就点「直接看答案」');
    return;
  }
  flipped=true;
  const g = fromRecall ? recGrade(c, txt) : null;

  let h='<div class="card-a"><div class="ans-label">答案</div>';
  if(c.t==='saq' && Array.isArray(c.a)){
    h+='<div class="ans-main">'+esc(c.a[0])+'</div><ul>';
    for(let i=1;i<c.a.length;i++) h+='<li>'+esc(c.a[i])+'</li>';
    h+='</ul>';
  }else if(c.t==='calc' && c.steps){
    h+='<div class="ans-main">'+esc(c.a)+'</div>';
    h+='<div class="ans-steps"><b>解题步骤：</b><br>'+
      (Array.isArray(c.steps)?c.steps.map((s,i)=>(i+1)+'. '+esc(s)).join('<br>'):esc(c.steps))+'</div>';
  }else{
    h+='<div class="ans-main">'+esc(Array.isArray(c.a)?c.a.join('；'):c.a)+'</div>';
    if(c.subs){
      h+='<div class="ans-steps"><b>答案：</b><br>'+
        c.subs.map((s,i)=>(i+1)+'. '+esc(s.label)+' = '+esc(s.ans)).join('<br>')+'</div>';
    }
  }
  if(c.n) h+='<div class="ans-note">💡 '+esc(c.n)+'</div>';
  h+=hookHtml(c);
  h+=notesLinkHtml(c);
  if(hasEn(Array.isArray(c.a)?c.a.join(' '):c.a))
    h+='<button class="spk-line" onclick="event.stopPropagation();speakAns()">🔊 念一遍答案</button>';
  h+=mixLinkHtml(c);
  if(HW_TYPES[c.t]) h+='<button class="hwcopy" onclick="event.stopPropagation();openHW(\'copy\')">✏️ 抄写一遍（看着答案写，加深记忆）</button>';
  if(S.hw && S.hw[c.id]){
    h+='<div class="hw-mine"><div class="hw-mine-t">✏️ 我的笔迹</div>'+
       ((S.hwThumb&&S.hwThumb[c.id])?'<img class="hw-thumb" style="cursor:zoom-in" onclick="event.stopPropagation();imgFull(this.src,\'手写笔迹 · 点开可缩放\')" src="'+escA(S.hwThumb[c.id])+'" alt="笔迹">':'')+
       '<div class="hw-mine-b"><button class="mini-btn" onclick="openHW()">重写 / 回放</button>'+
       '<button class="mini-btn" onclick="hwDel(\'' + c.id + '\')">删除</button></div></div>';
  }
  h+='</div>';
  h+=recPanel(g, txt);
  document.getElementById('flashcard').innerHTML+=h;

  const act=document.getElementById('actRow');
  const sug = !g ? 'fuzzy' : (g.rate>=0.5 ? 'known' : (g.rate<0.25 ? 'unknown' : 'fuzzy'));
  const unv = g ? '' : ',1';   // 没先回忆 → 标记未验证
  act.innerHTML=
    '<button class="act-btn unknown'+(sug==='unknown'?' sug':'')+'" onclick="markCard(-1'+unv+')">不熟 ❌'+
      (sug==='unknown'?'　·建议':'')+'</button>'+
    '<button class="act-btn fuzzy'+(sug==='fuzzy'?' sug':'')+'" onclick="markCard(2'+unv+')">模糊 🤔'+
      (sug==='fuzzy'?'　·建议':'')+'</button>'+
    '<button class="act-btn known'+(sug==='known'?' sug':'')+'" onclick="markCard(1'+unv+')">认识 ✅'+
      (sug==='known'?'　·建议':'')+'</button>';
  const ra=document.getElementById('recArea');
  if(ra){ ra.readOnly=true; ra.classList.add('rec-done'); }
}

/* ---------- 主动回忆：要点切分 / 关键词抽取 / 命中核对 ---------- */
function recNorm(s){
  return String(s==null?'':s)
    .replace(/[\s\u3000]/g,'')
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/g,function(ch){return '0123456789'['₀₁₂₃₄₅₆₇₈₉'.indexOf(ch)];})
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g,function(ch){return '0123456789'['⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(ch)];})
    .replace(/[⁺⁻]/g,function(ch){return ch==='⁺'?'+':'-';})
    .replace(/[，,。;；:：、（）()\[\]【】「」“”"'‘’·—–>＜<>]/g,'')
    .toLowerCase();
}
function recPoints(c){
  if(c.t==='saq' && Array.isArray(c.a)) return c.a.slice(0,10);
  const a = Array.isArray(c.a) ? c.a.join('；') : String(c.a==null?'':c.a);
  const cut = (re)=>a.split(re).map(x=>x.trim()).filter(x=>x.length>=2);
  let parts = cut(/[；;。\n]+/);
  // 名词/填空类卡片，一句话里常塞好几个考点，按逗号顿号细切；长答题只按句子切，别切碎
  if((c.t==='term'||c.t==='fill') && parts.length<3) parts = cut(/[；;。\n①②③④⑤⑥⑦⑧、]+|，|,/);
  if(parts.length<2) parts = cut(/[；;。\n①②③④⑤⑥⑦⑧、]+|，|,/); // 整段不分句的，按逗号兜底
  if(parts.length<2) parts = cut(/[①②③④⑤⑥⑦⑧]/);              // 还不行才按序号切
  return parts.length ? parts.slice(0,8) : [a];
}
function recTokens(str){
  const s=String(str||''), out=[];
  try{ for(const k in TERMS){ if(k.length>=2 && s.indexOf(k)>=0) out.push(k); } }catch(e){}
  const en=s.match(/[A-Za-zΑ-Ωα-ω][A-Za-zΑ-Ωα-ω0-9₂₃'\-]{1,}/g);
  if(en) en.forEach(x=>out.push(x));
  const num=s.match(/\d+(?:\.\d+)?/g);
  if(num) num.forEach(x=>{ if(x.length>=1) out.push(x); });
  const seen={}, r=[];
  out.forEach(t=>{ t=String(t).trim(); const k=recNorm(t);
    if(k.length<2 || seen[k]) return; seen[k]=1; r.push(t); });
  return r;
}
function recGrade(c, txt){
  const pts=recPoints(c), u=String(txt||''), nu=recNorm(u);
  if(!u.trim()) return {total:pts.length, hit:0, miss:pts, rate:0, wrote:false};
  const miss=[];
  let hit=0;
  pts.forEach(p=>{
    const toks=recTokens(p);
    let ok=false;
    if(toks.length){
      // 要点里常有 Hb / O₂ 这种到处出现的词，单个命中不算数：要命中一半以上
      const n=toks.filter(t=>{ const k=recNorm(t); return k.length>=2 && nu.indexOf(k)>=0; }).length;
      ok = toks.length<=2 ? n>=1 : (n/toks.length)>=0.5;
    } else {
      ok = nu.indexOf(recNorm(p).slice(0,3))>=0;
    }
    if(ok) hit++; else miss.push(p);
  });
  return {total:pts.length, hit:hit, miss:miss, rate:pts.length?hit/pts.length:0, wrote:true};
}
function recPanel(g, txt){
  if(!g) return '<div class="rec-res none">⚠️ 这题你没先回忆。<b>看着答案觉得「会」是最容易骗自己的</b>——'+
    '这题的复习间隔已被压到 7 天内，下次还得真写出来。</div>';
  const pct = Math.round(g.rate*100);
  const cls = g.rate>=0.5 ? 'good' : (g.rate<0.25 ? 'bad' : 'mid');
  let h='<div class="rec-res '+cls+'">'+
    '<div class="rec-h">你写出来的要点：<b>'+g.hit+' / '+g.total+'</b>（'+pct+'%）</div>';
  if(g.hit>0) h+='<div class="rec-mine">你写的：'+esc(String(txt).slice(0,120))+'</div>';
  if(g.miss.length){
    h+='<div class="rec-miss-t">漏掉的：</div><ul class="rec-miss">';
    g.miss.slice(0,5).forEach(p=>{ h+='<li>'+esc(p.length>60?p.slice(0,60)+'…':p)+'</li>'; });
    if(g.miss.length>5) h+='<li>…还有 '+(g.miss.length-5)+' 条</li>';
    h+='</ul>';
  }else{
    h+='<div class="rec-miss-t">要点全覆盖 ✅</div>';
  }
  h+='</div>';
  return h;
}


/* ---------- 填空题：输入 + 自动判分 ---------- */
function fillMatch(mine, ans){
  const m=recNorm(mine); if(!m) return false;
  const a=recNorm(ans);
  const core=recNorm(String(ans).replace(/[（(][^）)]*[）)]/g,''));
  if(m===a || m===core) return true;
  if(core.length>=2 && (m.indexOf(core)>=0 || core.indexOf(m)>=0)) return true;
  const na=(a.match(/^[\d.]+/)||[])[0], nm=(m.match(/^[\d.]+/)||[])[0];
  if(na && nm && na===nm) return true;
  return false;
}
function renderFillCard(c){
  const segs=String(c.q).split(/_{2,}/);
  const n=segs.length-1;
  const isExam = c.c && c.c.indexOf('考研')>=0;
  const favOn = cst(c.id).fav ? 1 : 0;
  let h='<div class="card-top"><div class="card-tag'+(isExam?' exam':'')+'">'+
    (TYPE_LABEL[c.t]||c.t)+(c.c?' · '+esc(c.c):'')+(KAO_DECKS.has(c.deck)?'<span class="kao-tag">考研</span>':'')+'</div>'+
    '<div style="display:flex;align-items:center;gap:8px">'+
    (hasEn(c.q)?'<button class="spk-btn" onclick="event.stopPropagation();speakCard()" title="朗读">🔊</button>':'')+
    (Array.isArray(c.k)&&c.k.length?'<button class="kd-link" onclick="event.stopPropagation();readForKid(\''+c.k[0]+'\')">📖 讲解</button>':'')+
    '<button class="fav-star'+(favOn?' on':'')+'" onclick="event.stopPropagation();toggleFav()">'+
    (favOn?'★':'☆')+'</button></div></div>';
  h+='<div class="card-q fill-q">'
h+=(c.img?'<div class="card-img" onclick="event.stopPropagation();imgFull(this.querySelector(\'img\').src,\''+(c.c||'题图')+' · 点开可缩放\')"><img src="'+esc(c.img)+'" loading="lazy" alt="题图"></div>':'');;
  for(let i=0;i<segs.length;i++){
    h+=termify(segs[i]);
    if(i<n) h+='<input class="fill-inp" id="fi'+i+'" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="'+(i+1)+'">';
  }
  h+='</div><div class="fill-tip">直接在空里填，填完点「检查」。填错了才需要自己评。</div>';
  document.getElementById('flashcard').innerHTML=h;
  document.getElementById('actRow').innerHTML=
    '<button class="act-btn next" onclick="checkFill()">检查 ✍️</button>';
  setTimeout(function(){ const a=document.getElementById('fi0'); if(a){ try{a.focus();}catch(e){} } },140);
  const ins=document.querySelectorAll('.fill-inp');
  ins.forEach(function(el){
    el.addEventListener('keydown', function(e){
      if(e.key!=='Enter') return;
      e.preventDefault();
      const nx=el.nextElementSibling;
      if(nx && nx.classList && nx.classList.contains('fill-inp')) nx.focus();
      else checkFill();
    });
  });
}
function checkFill(){
  const c=Q[qi];
  const segs=String(c.q).split(/_{2,}/);
  const ans=String(c.a==null?'':c.a).split(/[；;]/).map(x=>x.trim());
  const n=segs.length-1;
  const rows=[]; let right=0;
  for(let i=0;i<n;i++){
    const el=document.getElementById('fi'+i);
    const v=el?el.value:'';
    const ok=fillMatch(v, ans[i]||'');
    if(ok) right++;
    if(el){ el.classList.add(ok?'fill-ok':'fill-no'); el.readOnly=true; }
    rows.push({ok:ok, mine:v, ans:ans[i]||''});
  }
  if(right===n && n>0){
    applyScore(c.id, true);
    const fc=document.getElementById('flashcard');
    fc.insertAdjacentHTML('beforeend','<div class="rec-res good"><div class="rec-h">全对 ✅ '+n+'/'+n+
      '　这题算真会，下次间隔拉长。</div></div>');
    document.getElementById('actRow').innerHTML=
      '<button class="act-btn next" onclick="qi++;renderCard()">下一题 →</button>';
    return;
  }
  // 有错：给出对照，再让用户自评（默认模糊）
  let h='<div class="card-a"><div class="ans-label">正确答案</div>';
  h+='<div class="ans-main">'+esc(ans.join('；'))+'</div>';
  h+='<div class="fill-cmp">';
  rows.forEach(function(r,i){
    h+='<div class="fill-row'+(r.ok?' ok':' no')+'">'+(i+1)+'. '+
      (r.ok?'<span class="fc-ok">你填对了</span>':'你填「'+esc(r.mine||'空')+'」→ 应为 <b>'+esc(r.ans)+'</b>')+'</div>';
  });
  h+='</div>';
  if(c.n) h+='<div class="ans-note">💡 '+esc(c.n)+'</div>';
  h+=hookHtml(c);
  h+=notesLinkHtml(c);
  h+='</div>';
  document.getElementById('flashcard').insertAdjacentHTML('beforeend', h);
  document.getElementById('actRow').innerHTML=
    '<button class="act-btn unknown" onclick="markCard(-1)">不熟 ❌</button>'+
    '<button class="act-btn fuzzy sug" onclick="markCard(2)">模糊 🤔　·建议</button>'+
    '<button class="act-btn known" onclick="markCard(1)">认识 ✅</button>';
}

function pickOpt(i){
  const c=Q[qi];
  const raw = c.t==='tf' ? (String(c.a).indexOf('对')===0 ? 0 : 1) : c.a;
  const right = OPT_MAP ? OPT_MAP.indexOf(raw) : raw; // 乱序后按显示位置判定
  const opts=document.getElementById('flashcard').querySelectorAll('.opt');
  opts.forEach((el,j)=>{
    el.onclick=null;
    if(j===right) el.classList.add(j===i?'sel-right':'show-right');
    if(j===i && i!==right) el.classList.add('sel-wrong');
  });
  const ok = (i===right);
  const st=cst(c.id);
  if(ok){
    lastScore.right++;
    // 老熟人（已掌握且连续对过 2 次）不再追问，避免刷题被拖慢
    if(st.st===1 && (st.hit||0)>=2 && !(st.g>0)){
      applyScore(c.id, true);
      if(todayCounted){ todayCounted.rev++; S.todayRev=(S.todayRev||0)+1; save(); checkDailyDone(); }
      setTimeout(()=>{ qi++; renderCard(); }, 550);
      return;
    }
    setTimeout(function(){ askGuess(c, st); }, 220);   // 新题/蒙过的题：问一句真会还是蒙的
    return;
  }
  lastScore.wrong++;
  applyScore(c.id, false);
  if(todayCounted){
    if(st.st===0 && !(st.g>0)){ todayCounted.new++; S.todayNew=(S.todayNew||0)+1; }
    else { todayCounted.rev++; S.todayRev=(S.todayRev||0)+1; }
    save();
    checkDailyDone();
  }
  if(!retrySet.has(c.id)){ retrySet.add(c.id); Q.push(c); } // 错题重排一次
  setTimeout(function(){ showExplain(c); }, 240);           // 答错：停下看讲解
}

function checkInput(){
  const c=Q[qi];
  let allRight=true;
  (c.subs||[]).forEach((s,i)=>{
    const el=document.getElementById('sub'+i);
    if(!el) return;
    const v=el.value.trim();
    let ok=false;
    if(s.text){ ok = v===String(s.ans); }
    else{
      const num=parseFloat(v);
      if(!isNaN(num) && typeof s.ans==='number'){
        ok = Math.abs(num-s.ans) <= (s.tol!=null?s.tol:0.01);
      }
    }
    el.classList.remove('right','wrong');
    el.classList.add(ok?'right':'wrong');
    if(!ok) allRight=false;
  });
  if(allRight || document.getElementById('actRow').dataset.checked){
    if(allRight){
      const st=cst(c.id);
      applyScore(c.id, true);
      lastScore.right++;
      if(todayCounted){
        if(st.st===0){ todayCounted.new++; S.todayNew=(S.todayNew||0)+1; }
        else { todayCounted.rev++; S.todayRev=(S.todayRev||0)+1; }
        save(); checkDailyDone();
      }
      toast('✅ 全对！下一题');
      setTimeout(()=>{qi++; renderCard();}, 700);
    }else{
      document.getElementById('actRow').dataset.checked='1';
      // 显示步骤
      const stepsHtml = c.steps ? '<div class="ans-steps"><b>解题步骤：</b><br>'+
        (Array.isArray(c.steps)?c.steps.map((s,i)=>(i+1)+'. '+esc(s)).join('<br>'):esc(c.steps))+'</div>' : '';
      const ansHtml = '<div class="card-a"><div class="ans-label">参考答案</div><div class="ans-main">'+
        c.subs.map((s,i)=>esc(s.label)+' = '+esc(s.ans)).join('　')+'</div>'+stepsHtml+'</div>';
      document.getElementById('flashcard').innerHTML+=ansHtml;
      document.getElementById('actRow').innerHTML=
        '<button class="act-btn next" onclick="qi++; renderCard();">下一题 →</button>';
      const st=cst(c.id);
      applyScore(c.id, false);
      lastScore.wrong++;
    }
  }else{
    // 第一次检查，有错
    document.getElementById('actRow').dataset.checked='1';
    toast('❌ 有错，红色是错的，点下面看答案');
    document.getElementById('actRow').innerHTML=
      '<button class="act-btn next" onclick="checkInput()">看答案</button>';
  }
}

function markCard(st, unverified){
  const c=Q[qi];
  const prev=cst(c.id);
  applyScore(c.id, st>0, st===2, !!unverified);
  if(todayCounted){
    if(prev.st===0){ todayCounted.new++; S.todayNew=(S.todayNew||0)+1; }
    else { todayCounted.rev++; S.todayRev=(S.todayRev||0)+1; }
    save();
    checkDailyDone();
  }
  qi++; renderCard();
}

/* v20：不再用「配额达标」算打卡。当天有任何一次作答，就算学过一天 */
function markStudied(){
  const t=today();
  if(S.lastCheckin===t) return;
  const y=new Date(); y.setDate(y.getDate()-1);
  const yk=y.getFullYear()+'-'+String(y.getMonth()+1).padStart(2,'0')+'-'+String(y.getDate()).padStart(2,'0');
  S.streak = (S.lastCheckin===yk) ? (S.streak||0)+1 : 1;
  S.lastCheckin=t;
  if(!S.daily) S.daily={};
  S.daily[t]='done';
  S.lastDate=t;
  save();
}
/* 旧调用点兼容（现在等同于 markStudied） */
function checkDailyDone(){ markStudied(); }

function renderDone(){
  const ok=lastScore.right, ng=lastScore.wrong;
  const total=ok+ng;
  const rate=total?Math.round(ok/total*100):0;
  document.getElementById('flashcard').innerHTML=
    '<div class="done-box"><div class="big">'+(rate>=80?'🎉':rate>=60?'👍':'💪')+'</div>'+
    '<h2>本轮完成</h2>'+
    '<p>共 '+total+' 张 · 对 '+ok+' · 错 '+ng+' · 正确率 '+rate+'%</p>'+
    '<button class="big-btn" onclick="go(\'home\')">回首页</button>'+
    '<div class="btn-row"><button class="big-btn ghost" onclick="exitStudy();startWrong()">再刷错题</button>'+
    '<button class="big-btn ghost" onclick="exitStudy();startRandom()">再来一组</button></div></div>';
  document.getElementById('actRow').innerHTML='';
  document.getElementById('studyBar').innerHTML='';
}

/* ==================== 设置 ==================== */
function renderSet(){
  applyGuestMode();
  if(typeof renderAcc==='function') renderAcc();
  if(typeof ghFillSet==='function') ghFillSet();
  if(typeof subRefreshUI==='function') subRefreshUI();   /* v33 投稿箱登录态 */
  const all=stats(null);
  const tr=document.getElementById('ttsRateRow');
  if(tr){
    const cur=(S.ttsRate||1);
    tr.innerHTML=[0.7,1,1.25].map(function(r){
      return '<button class="mini-btn'+(Math.abs(cur-r)<0.01?' blue':'')+'" onclick="setTtsRate('+r+')">'+r+'×</button>';
    }).join('')+'<button class="mini-btn" onclick="ttsTest()">🔊 试听</button>';
  }
  document.getElementById('aboutText').innerHTML=
    '题库版本：'+(HUB.generated||'v1')+' · 共 '+HUB.decks.length+' 库 '+all.total+' 张<br>'+
    '已掌握 '+all.mastered+' 张 · 错题 '+all.wrong+' 张 · 蒙对未掌握 '+all.guessed+' 张 · 连续学习 '+(S.streak||0)+' 天';
}

function resetProg(){
  if(!confirm('确定清空全部学习记录？不可恢复。')) return;
  S={cards:{}, daily:{}, streak:0, lastDate:null, goal:S.goal, todayNew:0, todayRev:0, hw:{}, hwThumb:{}, hwOpt:{onlyPen:0}};
  save(); renderSet(); toast('已清空');
}

/* ==================== 手势滑动切卡（v19：收紧判定，避开手写/批注） ==================== */
let tx=0, ty=0, tT0=0, tSkip=false, tMulti=false;
const SW_MIN=95, SW_SLOPE=0.55, SW_MS=650;   // 最小横向位移 / 最大斜率(越小越要求水平) / 最长用时

/* 这些情况下绝不翻页：手写板开着 / 正在画 / 批注模式 / 起点落在画布或输入框 */
function swipeBlocked(target){
  const mask=document.getElementById('hwMask');
  if(mask && mask.classList.contains('on')) return true;
  if(typeof HW!=='undefined' && (HW.cur || HW.playing)) return true;
  if(typeof INK!=='undefined' && INK && (INK.on || INK.cur)) return true;
  let el=target;
  for(let i=0; el && el.nodeType===1 && i<14; i++){
    const tg=el.tagName;
    if(tg==='CANVAS'||tg==='INPUT'||tg==='TEXTAREA'||tg==='SELECT') return true;
    if(el.classList && (el.classList.contains('ink-host')||el.classList.contains('ink-cv')||el.classList.contains('no-swipe'))) return true;
    el=el.parentNode;
  }
  return false;
}
document.addEventListener('touchstart', function(e){
  if(e.touches.length>1){ tMulti=true; return; }     // 双指=缩放/误触，整串手势都不判
  const t=e.touches[0];
  tx=t.clientX; ty=t.clientY; tT0=performance.now();
  tSkip = swipeBlocked(e.target);
}, {passive:true});
document.addEventListener('touchend', function(e){
  if(e.touches && e.touches.length>0) return;          // 还有手指没离开，等最后一根
  const multi=tMulti; tMulti=false;
  if(multi) return;                                   // 多指手势不算翻页
  if(tSkip){ tSkip=false; return; }
  if(!e.changedTouches || !e.changedTouches.length) return;
  const t=e.changedTouches[0];
  const dx=t.clientX-tx, dy=t.clientY-ty, dt=performance.now()-tT0;
  if(dt>SW_MS) return;                                // 慢慢拖，多半在画/选字
  if(Math.abs(dx)<SW_MIN) return;                     // 划得太短
  if(Math.abs(dy)>Math.abs(dx)*SW_SLOPE) return;      // 斜着划不算，必须是横着推
  if(!document.getElementById('view-study').classList.contains('active')) return;
  if(swipeBlocked(e.target)) return;
  if(dx<0){ if(qi<Q.length-1){qi++; renderCard();} }
  else { if(qi>0){qi--; renderCard();} }
}, {passive:true});


/* ==================== v2：间隔重复 ==================== */
const IV=[0,1,2,4,7,15,30,60,120];   // 掌握等级对应的复习间隔（天）
TYPE_LABEL['essay']='论述';

function nextDue(lv){
  const d=new Date(); d.setDate(d.getDate()+IV[Math.min(Math.max(lv,0),IV.length-1)]);
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
/* ok=答对/认识；fuzzy=模糊 */
function applyScore(id, ok, fuzzy, unverified){
  const prev=cst(id);
  let lv=prev.lv||0;
  // 没先回忆就点"会"：lv 封顶 4（7 天后再见一次），不给 60/120 天的信任
  const cap = unverified ? 4 : IV.length-1;
  if(fuzzy)            lv=Math.max(0, lv-1);
  else if(ok)          lv=Math.min(lv+1, cap);
  else                 lv=0;
  setCard(id, {
    st: fuzzy?2:(ok?1:-1),
    hit: ok?(prev.hit||0)+1:0,
    /* v25：累计错误计数（答对一次减一，自己会好）——顽固卡靠它认人 */
    w: ok ? Math.max(0,(prev.w||0)-1) : (fuzzy ? (prev.w||0) : (prev.w||0)+1),
    lv: lv,
    due: nextDue(lv),
    fav: prev.fav||0
  });
  markStudied();
}
function dueList(){
  const td=today();
  return HUB.cards.filter(c=>{ const s=cst(c.id); return (s.st!==0 || (s.g||0)>0) && s.due && s.due<=td; });
}
function startDue(){
  const q=shuffle(dueList());
  if(!q.length){ toast('今天没有到期的卡 👍'); return; }
  startSession(q,'今日到期复习','due');
}
/* v20：首页唯一主按钮 —— 到期 → 新题 → 随机，永远有下一步 */
/* v23 题库分层：课堂（老师PPT/作业/本校期中）为主，考研834为辅 */
const KAO_DECKS=new Set((HUB.decks||[]).filter(function(d){return d.tier==='kao';}).map(function(d){return d.id;}));
function isKao(c){ return KAO_DECKS.has(c.deck); }
function coreCards(){ return HUB.cards.filter(function(c){ return !isKao(c); }); }
function startSmart(){
  const td=today();
  const pool=coreCards();
  let due=pool.filter(c=>{ const s=cst(c.id); return s.st!==0 && s.due && s.due<=td; });
  if(!due.length) due=HUB.cards.filter(c=>{ const s=cst(c.id); return s.st!==0 && s.due && s.due<=td; }); /* 课堂全清完才借考研题 */
  if(due.length){
    due.sort(function(a,b){ return String(cst(a.id).due||'').localeCompare(String(cst(b.id).due||'')); });
    const q=due.slice(0,40);
    startSession(q,'今日到期 · '+q.length+' 张','due'); return;
  }
  let fresh=pool.filter(c=>{ const s=cst(c.id); return s.st===0 && !(s.g>0); });
  if(!fresh.length) fresh=HUB.cards.filter(c=>{ const s=cst(c.id); return s.st===0 && !(s.g>0); });
  if(fresh.length){
    const q=fresh.slice(0,20);
    startSession(q,'新题 · '+q.length+' 张','new'); return;
  }
  startRandom();
}
function startFav(){
  const q=HUB.cards.filter(c=>cst(c.id).fav);
  if(!q.length){ toast('还没有收藏，刷题时点右上角 ☆'); return; }
  startSession(q,'我的收藏','fav');
}
function toggleFav(){
  const c=Q[qi]; if(!c) return;
  const s=cst(c.id);
  setCard(c.id,{fav:s.fav?0:1});
  toast(s.fav?'已取消收藏':'已收藏 ⭐');
  renderCard();
}

/* ==================== v2：搜索 ==================== */
let SR=[];
function ansText(c){
  if(Array.isArray(c.a)) return c.a.join('；');
  if(c.subs) return (c.subs||[]).map(s=>String(s.label)+'='+String(s.ans)).join('  ');
  if(Array.isArray(c.steps)) return String(c.a||'')+' '+c.steps.join(' ');
  return String(c.a==null?'':c.a);
}
function hl(text,kw){
  const s=esc(text), k=esc(kw);
  return k ? s.split(k).join('<mark>'+k+'</mark>') : s;
}
function quickSearch(){
  const v=(document.getElementById('homeSearch')||{}).value||'';
  const si=document.getElementById('searchInput');
  if(si) si.value=v;
  go('search');
}
function doSearch(){
  const inp=document.getElementById('searchInput');
  const box=document.getElementById('searchRes');
  if(!inp||!box) return;
  const kw=(inp.value||'').trim();
  if(!kw){ box.innerHTML='<div class="kbd-tip">输入关键词开始搜索</div>'; return; }
  const k=kw.toLowerCase();
  SR=HUB.cards.filter(c=>{
    const t=(String(c.q||'')+' '+ansText(c)+' '+String(c.n||'')+' '+String(c.c||'')).toLowerCase();
    return t.indexOf(k)>=0;
  });
  if(!SR.length){ box.innerHTML='<div class="kbd-tip">没找到「'+esc(kw)+'」，换个词试试</div>'; return; }
  let x='<div style="font-size:12px;color:var(--sub);margin-bottom:10px">找到 '+SR.length+
        ' 条，点任意一条从这题开始刷</div>';
  SR.slice(0,80).forEach((c,i)=>{
    const dk=HUB.decks.find(z=>z.id===c.deck);
    x+='<div class="res-item" onclick="startSearchAt('+i+')">'+
       '<div class="r-t">'+esc(dk?dk.name:'')+(c.c?' · '+esc(c.c):'')+' · '+(TYPE_LABEL[c.t]||c.t)+'</div>'+
       '<div class="r-q">'+hl(c.q,kw)+'</div></div>';
  });
  if(SR.length>80) x+='<div class="kbd-tip">仅显示前 80 条，缩小关键词更精确</div>';
  box.innerHTML=x;
}
function startSearchAt(i){
  startSession(SR,'搜索结果','search');
  qi=i; renderCard();
}


/* ==================== v8：知识体系 + 漏洞诊断 ==================== */
var KFLAT = null;
function knowAll(){
  if(KFLAT) return KFLAT;
  var out = [];
  (KNOW.subjects||[]).forEach(function(sj){
    (sj.chs||[]).forEach(function(ch){
      (ch.ks||[]).forEach(function(k){
        k._s = sj.id; k._sn = sj.n; k._ic = sj.ic; k._cl = sj.cl;
        k._ch = ch.n; k._cn = ch.id;
        out.push(k);
      });
    });
  });
  KFLAT = out;
  return out;
}
function knowById(id){
  var a = knowAll();
  for(var i=0;i<a.length;i++) if(a[i].id===id) return a[i];
  return null;
}
var KCARDS = {};
function knowCards(kid){
  if(KCARDS[kid]) return KCARDS[kid];
  var r = [];
  for(var i=0;i<HUB.cards.length;i++){
    var c = HUB.cards[i];
    if(c.k && c.k.indexOf(kid)>=0) r.push(c);
  }
  KCARDS[kid] = r;
  return r;
}
function knowStat(kid){
  var cs = knowCards(kid), mas=0, seen=0, wrong=0;
  for(var i=0;i<cs.length;i++){
    var s = cst(cs[i].id);
    if(s.st>0) mas++;
    if(s.st!==0 || (s.hit||0)>0) seen++;
    if(s.st<0) wrong++;
  }
  return {t:cs.length, mas:mas, seen:seen, wrong:wrong};
}
function knPlain(t){ return (t||'').replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim(); }
function knColor(p){ return p>=80?'var(--ok)':p>=50?'var(--warn)':'var(--bad)'; }

/* 薄弱知识点排序 */
function weakList(n){
  var arr = [];
  knowAll().forEach(function(k){
    var s = knowStat(k.id);
    if(s.t < 3) return;
    if(s.seen < 3) return;                 // 没刷过的不算"漏洞"，算"没开始"
    var p = Math.round(s.mas/s.t*100);
    var weak = s.wrong*3 + (s.seen-s.mas)*1.1;
    if(s.wrong===0 && (s.seen-s.mas)<2) return;
    arr.push({k:k, s:s, p:p, w:weak});
  });
  arr.sort(function(a,b){ return b.w-a.w; });
  return arr.slice(0, n||5);
}

/* ==================== v21：按章节精讲（预习用） ==================== */
var CH_INTRO = {
  p1: '这章是生化的地基。先把 20 种氨基酸按侧链分成四类，再往上搭三层：一级结构（肽键）→ 二级（α 螺旋、β 折叠）→ 三级（折叠与稳定力）→ 四级（亚基排布）。考试反复考的就两件事：pI 怎么算、分离纯化方法怎么选——盐析 / 透析 / 凝胶过滤 / 电泳，各分离的是「溶解度、小分子、分子大小、电荷」中的哪一个。',
  p2: '从「酶为什么快、为什么专一」讲起，核心是一条米氏方程和三个常数：Km、Vmax、kcat。四种抑制类型是必考表，判断依据永远是 Km 和 Vmax 变没变——记住这个，表就不用背。最后是调节：别构、共价修饰、酶原激活，本质都是「改构象或改共价键来开关活性」。',
  p3: '一条主线：葡萄糖怎么变成 CO₂ 和 H₂O，能量在哪几步产生。EMP 在胞质、TCA 在线粒体基质、氧化磷酸化在内膜——三个位置经常混。会算 ATP 才算真会，注意教材口径（旧 36/38，新 30/32），考试按你们教材走。糖异生基本是 EMP 的逆向绕行，重点记那几个「绕不过去的坎」。',
  p4: '这章只挂了一个知识点，但它是脂肪动员的全部主线：活化 → 转运 → 脱氢 → 水化 → 再脱氢 → 硫解，每轮砍两个碳，产 1 FADH₂ + 1 NADH + 1 乙酰 CoA。软脂酸 7 轮怎么算出 106 个 ATP 是经典题。酮体在肝里生成、肝外用——这个「肝生酮、肝不用酮」是常考点。',
  p5: '从碱基配对讲到中心法则的三条流水线：复制（半保留、双向、冈崎片段）、转录（模板链和编码链千万别搞反）、翻译（核糖体三步）。这章名词密度最高，建议自己列一张三列表：谁做、做什么、需要什么，比反复读有效。',
  g1: '遗传学的算术章。分离定律和自由组合定律的本质，是减数分裂时同源染色体与非同源染色体的行为。9:3:3:1 的各种变形（9:7、13:3、9:6:1、15:1）全是从这里推出来的——记住「哪两个表现型被合并了」，比背比例快得多。',
  g2: '从「基因在染色体上排队」开始：连锁互换、三点测交算图距和双交换、干涉系数。染色体层面是结构变异（缺失 / 重复 / 倒位 / 易位）和数目变异（整倍体 / 非整倍体），每种变异的减数分裂行为不同，画一次联会图就明白了。最后是细胞质遗传——母性影响和母系遗传不是一回事。',
  g3: '两块内容，都是「统计味」的。数量性状看遗传率、看正态分布、看加性方差；群体遗传看哈迪-温伯格平衡，会从一代基因型频率反推等位基因频率。突变部分记类型、诱变剂、修复途径四条线，别混「突变」和「修复」。',
  g4: '细菌和噬菌体是遗传学的实验工具：接合、转化、转导三种水平转移，各用什么证据证明、影印法怎么筛突变体。分子部分把复制转录翻译再走一遍，加上 RNAi 和操纵子——乳糖操纵子的正负调控是必考图，要能默画。',
  g5: '这章是「认技术」：PCR、电泳、Southern / Northern / Western、测序、基因敲除，各自测的是 DNA、RNA 还是蛋白。发育部分讲果蝇体轴基因的层级（母体效应 → 分节 → 体节极性 → 同源异型），以及细胞凋亡在发育中的角色。',
  e1: 'CET-6 词汇按主题网络记，比按字母表背有效得多。每张卡是一个词根或主题簇，先记「这一簇共同的意思」，再记拼写。目标 550 分的话，阅读里的高频动词和抽象名词优先，生僻名词可以放。',
  e2: '听力考的不是听懂每个词，是预判。看选项猜场景（校园 / 职场 / 科研 / 消费），抓信号词（however、actually、the point is），答案通常在转折后面。新闻听力抓开头五秒的主语加动词。',
  e3: '三段框架：引入（现象或争议）→ 主体（两个理由 + 例证）→ 结尾（重申 + 建议）。分数差距在句子上：把 very important 换成 carries substantial weight，把简单句改成带从句的复合句，但要保证不错——错一句的代价大于炫一句的收益。',
  e4: '中国文化与社会话题是高频。难点在四字词和没有英文对应的概念（比如「天人合一」），套路是先拆成「谁 - 做什么 - 怎么样」的简单句，再合并。朝代、节气、非遗这类专有名词必须提前背，考场上现想来不及。'
};

var READ = {subj:null, ch:null};

/* 在含 HTML 标签的正文里高亮术语：只处理文本片段，不动标签 */
function termifyHtml(html){
  return String(html||'').split(/(<[^>]+>)/).map(function(seg){
    if(seg.charAt(0)==='<') return seg;
    return termify(seg);
  }).join('');
}
function rdEnsure(){ if(!S.read) S.read={}; }
function rdKnow(chid){
  var out=null;
  (KNOW.subjects||[]).forEach(function(sj){
    (sj.chs||[]).forEach(function(ch){ if(ch.id===chid) out={sj:sj, ch:ch, pos:sj.chs.indexOf(ch)+1}; });
  });
  return out;
}
function chCards(ch){
  var seen={}, arr=[];
  (ch.ks||[]).forEach(function(k){
    knowCards(k.id).forEach(function(c){ if(seen[c.id]) return; seen[c.id]=1; arr.push(c); });
  });
  return arr;
}
function rdSubj(id){ READ.subj=id; READ.ch=null; renderRead(); }
function rdBack(){
  if(READ.from==='study'){ READ.from=null; go('study'); return; }   // 从刷题跳来的，原路回去
  if(READ.ch){ READ.ch=null; renderRead(); }
  else { go('know'); }
}
function renderRead(){
  rdEnsure();
  if(!READ.subj) READ.subj=(KNOW.subjects[0]||{}).id;
  if(READ.ch){ rdChapter(READ.ch); return; }
  if(typeof INK!=='undefined' && INK.key) inkDetach();   // 回目录：收起批注条并保存

  var sj=null;
  (KNOW.subjects||[]).forEach(function(x){ if(x.id===READ.subj) sj=x; });
  if(!sj) sj=KNOW.subjects[0];

  document.getElementById('rdTitle').textContent='📖 章节精讲';
  var totalCh=0, totalK=0;
  (KNOW.subjects||[]).forEach(function(x){ totalCh+=(x.chs||[]).length; totalK+=(x.chs||[]).reduce(function(a,c){return a+c.ks.length;},0); });
  document.getElementById('rdSub').textContent=totalCh+' 章 · '+totalK+' 个知识点';

  var h='<div class="rd-subj">';
  (KNOW.subjects||[]).forEach(function(x){
    h+='<button class="'+(x.id===sj.id?'on':'')+'" onclick="rdSubj(\''+x.id+'\')">'+x.ic+' '+esc(x.n)+'</button>';
  });
  h+='</div>';
  h+='<div class="kbd-tip" style="margin:0 0 12px">先读一遍再刷题。每章开头有一段「这章在讲什么」，正文是讲透版，底下配易错和口诀。</div>';

  /* 上次读到哪 */
  var lastId=null, lastTs=0;
  for(var kk in S.read){ if(S.read[kk]>lastTs){ lastTs=S.read[kk]; lastId=kk; } }
  if(lastId){
    var lo=rdKnow(lastId);
    if(lo){
      h+='<div class="rd-ch read" onclick="openCh(\''+lastId+'\',1)" style="border:1px solid #26405c">'+
        '<div class="n">✓</div><div class="t"><b>接着读：'+esc(lo.ch.n)+'</b>'+
        '<span>'+esc(lo.sj.n)+' · 第 '+lo.pos+' 章 · 上次读到</span></div>'+
        '<div class="go">继续 →</div></div>';
    }
  }

  (sj.chs||[]).forEach(function(ch,i){
    var cs=chCards(ch);
    var done=S.read[ch.id];
    h+='<div class="rd-ch'+(done?' read':'')+'" onclick="openCh(\''+ch.id+'\')">'+
      '<div class="n">'+(done?'✓':(i+1))+'</div>'+
      '<div class="t"><b>'+esc(ch.n)+'</b><span>'+ch.ks.length+' 个知识点 · '+cs.length+' 题</span></div>'+
      '<div class="go">读 →</div></div>';
  });

  document.getElementById('rdBody').innerHTML=h;
  window.scrollTo(0,0);
}
function openCh(chid, resume){ READ.ch=chid; READ.resume=!!resume; renderRead(); }
function rdChapter(chid){
  rdEnsure();
  var o=rdKnow(chid);
  if(!o){ READ.ch=null; renderRead(); return; }
  var sj=o.sj, ch=o.ch, pos=o.pos;
  var cards=chCards(ch);

  /* 切章前先把上一章的批注落盘（v21：精讲页支持勾画，按章保存） */
  if(typeof INK!=='undefined' && INK.key) inkSaveNow();

  document.getElementById('rdTitle').textContent=ch.n;
  document.getElementById('rdSub').textContent=sj.n+' · 第 '+pos+' 章';

  var h='<div class="rd-hero"><h2>'+esc(ch.n)+'</h2>'+
    '<div class="m">'+sj.ic+' '+esc(sj.n)+' · 第 '+pos+'/'+sj.chs.length+' 章 · '+
      ch.ks.length+' 个知识点 · '+cards.length+' 题</div>'+
    (CH_INTRO[chid] ? '<div class="rd-intro">'+esc(CH_INTRO[chid])+'</div>' : '')+
    '</div>';

  (ch.ks||[]).forEach(function(k,i){
    var n=knowCards(k.id).length;
    h+='<div class="rd-k" id="rdk-'+k.id+'"><h3>'+(i+1)+'. '+esc(k.n)+'<i>'+n+' 题</i></h3>'+
      '<div class="body">'+termifyHtml((k.core||'').replace(/\n/g,'<br>'))+'</div>';
    if(k.keys && k.keys.length){
      h+='<div class="rd-keys">'+k.keys.slice(0,10).map(function(t){ return '<span>'+esc(t)+'</span>'; }).join('')+'</div>';
    }
    if(k.traps && k.traps.length){
      h+='<div class="rd-trap">'+k.traps.map(function(t){ return '<div>⚠️ '+esc(t)+'</div>'; }).join('')+'</div>';
    }
    if(k.hook){ h+='<div class="rd-hook">🧠 '+esc(k.hook)+'</div>'; }
    h+='<div class="rd-foot" style="margin-top:11px"><button class="big-btn ghost" style="font-size:13px;padding:11px" onclick="startKnow(\''+k.id+'\')">刷这 '+n+' 题</button></div>';
    h+='</div>';
  });

  h+='<div class="rd-foot"><button class="big-btn" onclick="startChapter(\''+chid+'\')">读完，刷本章 '+cards.length+' 题</button></div>';
  h+='<div class="rd-foot" style="margin-top:9px">'+
     (pos>1 ? '<button class="big-btn ghost" onclick="openCh(\''+sj.chs[pos-2].id+'\')">← 上一章</button>' : '')+
     (pos<sj.chs.length ? '<button class="big-btn ghost" onclick="openCh(\''+sj.chs[pos].id+'\')">下一章 →</button>' : '')+
     '</div>';

  document.getElementById('rdBody').innerHTML=h;
  S.read[chid]=Date.now(); save();
  var backY=0;
  if(READ.resume){ backY=(S.rpos && S.rpos[chid])||0; READ.resume=false; }
  window.scrollTo(0, backY);
  /* v21：这一章可以勾画——批注按章保存，跟云同步走 */
  setTimeout(function(){
    var host=document.getElementById('rdBody');
    if(host) inkAttach(host, 'read:'+chid);
  }, 60);
}
function startChapter(chid){
  var o=rdKnow(chid); if(!o) return;
  var all=chCards(o.ch);
  if(!all.length){ toast('这一章还没挂题'); return; }
  var q=all.slice().sort(function(a,b){
    var sa=cst(a.id), sb=cst(b.id);
    var ra=(sa.st<0?0:sa.st===0?1:2), rb=(sb.st<0?0:sb.st===0?1:2);
    return ra-rb;
  });
  var take=q.slice(0,40);
  startSession(take, '精讲 · '+o.ch.n+'（'+take.length+'/'+q.length+' 题）', 'know');
}
/* 刷题时点「📖 讲解」：跳到该知识点所在章节，并滚到它那一段 */
function readForKid(kid){
  var found=null;
  (KNOW.subjects||[]).forEach(function(sj){
    (sj.chs||[]).forEach(function(ch){
      (ch.ks||[]).forEach(function(k){ if(k.id===kid) found={sj:sj, ch:ch}; });
    });
  });
  if(!found){ toast('这个知识点还没写讲解'); return; }
  READ.subj=found.sj.id; READ.ch=found.ch.id; READ.resume=false; READ.from='study';
  document.querySelectorAll('.view').forEach(function(x){ x.classList.remove('active'); });
  var v=document.getElementById('view-read'); if(v) v.classList.add('active');
  var nk=document.getElementById('navKnow'); if(nk) nk.classList.add('on');
  var ns=document.getElementById('navStudy'); if(ns) ns.classList.remove('on');
  renderRead();
  setTimeout(function(){
    var el=document.getElementById('rdk-'+kid);
    if(el){ el.scrollIntoView({block:'start'}); window.scrollBy(0,-8); }
  }, 90);
}
/* 记住读到哪一行，下次「接着读」能落回原处 */var rdScrollT=null;
window.addEventListener('scroll', function(){
  if(!READ.ch) return;
  var v=document.getElementById('view-read');
  if(!v || !v.classList.contains('active')) return;
  if(rdScrollT) clearTimeout(rdScrollT);
  rdScrollT=setTimeout(function(){
    if(!S.rpos) S.rpos={};
    S.rpos[READ.ch]=Math.round(window.scrollY);
    save();
  }, 700);
}, {passive:true});

/* v20：知识点专攻排序 —— 不是只看错题，还要看「到期」和「学了没掌握」 */
function drillList(){
  var arr = [];
  knowAll().forEach(function(k){
    var s = knowStat(k.id);
    var due = 0;
    knowCards(k.id).forEach(function(c){
      var cs = cst(c.id);
      if(cs.st!==0 && cs.due && cs.due<=today()) due++;
    });
    var p = s.t ? Math.round(s.mas/s.t*100) : 0;
    arr.push({
      k:k, s:s, p:p, due:due, started: s.seen>0,
      score: s.wrong*3 + (s.seen-s.mas)*1.2 + due*2
    });
  });
  arr.sort(function(a,b){
    if(a.started !== b.started) return a.started ? -1 : 1;   // 学过的排前面
    if(b.score !== a.score) return b.score - a.score;
    return a.p - b.p;
  });
  return arr;
}
function drillHtml(arr){
  var h = '';
  arr.forEach(function(x){
    var why = [];
    if(x.s.wrong) why.push('错 '+x.s.wrong+' 张');
    if(x.due > x.s.wrong) why.push('到期 '+x.due+' 张');   // 只写"错"覆盖不到的部分，避免重复
    if(!x.started) why.push('还没开始');
    else if(x.s.mas < x.s.t) why.push('掌握 '+x.s.mas+'/'+x.s.t);
    if(!why.length) why.push('已掌握 '+x.s.mas+'/'+x.s.t);
    h += '<div class="weak-item drill-row" onclick="openKD(\''+x.k.id+'\')">'+
      '<div class="w-n">'+esc(x.k.n)+'<div class="w-why">'+why.join(' · ')+'</div></div>'+
      '<div class="drill-right"><b style="color:'+knColor(x.p)+'">'+x.p+'%</b>'+
      '<button class="drill-btn" onclick="event.stopPropagation();startKnow(\''+x.k.id+'\')">刷</button></div></div>';
  });
  return h;
}
function drillToggle(){
  var el = document.getElementById('drillCold'), btn = document.getElementById('drillMoreBtn');
  if(!el) return;
  var open = el.style.display === 'none';
  el.style.display = open ? 'block' : 'none';
  if(btn) btn.textContent = open ? '收起 ▴' : ('展开还没碰过的 '+btn.getAttribute('data-n')+' 个 ▾');
}

function renderKnow(){
  var all = knowAll();
  var linked = HUB.cards.filter(function(c){ return c.k && c.k.length; });
  var tot = linked.length, mas = 0, wrongCard = 0;
  linked.forEach(function(c){ var s=cst(c.id); if(s.st>0) mas++; else if(s.st<0) wrongCard++; });
  var pct = tot?Math.round(mas/tot*100):0;

  var h = '<div class="know-overview">'+
    '<div class="ko-top"><b>'+pct+'%</b><span>知识点总体掌握 · '+all.length+' 个知识点 · '+tot+' 张题</span></div>'+
    '<div class="ko-bar">'+
      '<i style="width:'+(mas/tot*100).toFixed(1)+'%;background:var(--ok)"></i>'+
      '<i style="width:'+((tot-mas-wrongCard>0)?((tot-mas-wrongCard)/tot*100).toFixed(1):0)+'%;background:var(--warn)"></i>'+
      '<i style="width:'+(wrongCard/tot*100).toFixed(1)+'%;background:var(--bad)"></i>'+
    '</div>'+
    '<div class="ko-legend"><span><em style="background:var(--ok)"></em>已掌握 '+mas+'</span>'+
    '<span><em style="background:var(--warn)"></em>学过未掌握 '+(tot-mas-wrongCard)+'</span>'+
    '<span><em style="background:var(--bad)"></em>错题 '+wrongCard+'</span></div>'+
    '<button class="ko-hook-btn" style="background:linear-gradient(135deg,#17293a,#141b23); border-color:#2f5570; color:#9fd6ff; font-size:14px" onclick="go(\'read\')">📖 按章节精讲 · 14 章通读，预习/复习都用它</button>'+
    '<button class="ko-hook-btn" onclick="go(\'hook\')">⚡ 打开钩子墙 · '+hookCount()+' 条口诀，覆盖 '+hookCover()+' 张题</button>'+
    '<button class="ko-hook-btn" style="background:linear-gradient(135deg,#16232e,#151a20); border-color:#2b4152; color:#8ecfff" onclick="go(\'term\')">📖 打开术语表 · '+TERM_KEYS.length+' 条，看不懂题就先查词</button>'+
    '<button class="ko-hook-btn" style="background:linear-gradient(135deg,#2a1d2e,#1a1620); border-color:#5a3768; color:#d9a8ff" onclick="go(\'mix\')">⚖️ 易混对照 · '+MIXED.length+' 组，专治两个概念串了</button></div>';

  /* v20：专攻清单 —— 39 个知识点全部排序，不是只挑 5 个 */
  var dl = drillList();
  var hot = dl.filter(function(x){ return x.started; });
  var cold = dl.filter(function(x){ return !x.started; });
  h += '<div class="weak-box drill"><div class="weak-h">🎯 专攻清单</div>';
  h += '<div class="weak-sub">按「错题 + 到期 + 没掌握的量」从高到低排。<b>点名字看讲解，点「刷」直接做这个知识点的题。</b></div>';
  if(!hot.length){
    h += '<div class="weak-none">还没有答题记录，下面全是「没开始」。随便挑一个开刷就行，刷完这里会自动排序。</div>';
  }else{
    h += drillHtml(hot);
  }
  if(cold.length){
    var openCold = hot.length ? 'none' : 'block';       // 一条记录都没有时，直接摊开
    h += '<div id="drillCold" style="display:'+openCold+'">'+drillHtml(cold)+'</div>'+
      '<button class="drill-more" id="drillMoreBtn" data-n="'+cold.length+'" onclick="drillToggle()">'+
      (hot.length ? ('展开还没碰过的 '+cold.length+' 个 ▾') : '收起 ▴')+'</button>';
  }
  h += '</div>';

  /* 知识树 */
  (KNOW.subjects||[]).forEach(function(sj){
    var seenSet={}, st=0, sm=0;
    sj.chs.forEach(function(ch){ ch.ks.forEach(function(k){
      knowCards(k.id).forEach(function(c){
        if(seenSet[c.id]) return;
        seenSet[c.id]=1; st++;
        if(cst(c.id).st>0) sm++;
      });
    }); });
    h += '<div class="subj-h"><div class="ic" style="background:'+sj.cl+'22;color:'+sj.cl+'">'+sj.ic+'</div>'+
      esc(sj.n)+'<span class="cnt">'+sm+'/'+st+' 张</span></div>';
    sj.chs.forEach(function(ch){
      h += '<div class="ch-h">'+esc(ch.n)+'</div>';
      ch.ks.forEach(function(k){
        var s = knowStat(k.id);
        var p = s.t?Math.round(s.mas/s.t*100):0;
        h += '<div class="k-row" onclick="openKD(\''+k.id+'\')">'+
          '<div class="k-name">'+esc(k.n)+
            '<div class="k-mini"><i style="width:'+p+'%;background:'+knColor(p)+'"></i></div></div>'+
          (s.wrong>0?'<span class="k-flag">错'+s.wrong+'</span>':'')+
          '<span class="k-meta">'+s.mas+'/'+s.t+'</span>'+
          '<span class="k-pct" style="color:'+knColor(p)+'">'+p+'%</span></div>';
      });
    });
  });

  var uncat = HUB.cards.filter(function(c){ return !c.k || !c.k.length; }).length;
  h += '<div class="kd-sec" style="margin-top:18px"><h3>📌 未归类题目</h3>'+
    '<div class="kd-note">还有 '+uncat+
    ' 张题暂时没挂到上面 39 个知识点里（属于超纲名解、生物膜/细胞周期等拓展内容），不影响刷题，后续再补。</div></div>';

  document.getElementById('knowBody').innerHTML = h;
  document.getElementById('knowSub').textContent = all.length+' 个知识点 · 覆盖 '+(HUB.cards.length-uncat)+'/'+HUB.cards.length+' 张题';
}

function openKD(kid){
  var k = knowById(kid);
  if(!k){ toast('知识点不存在'); return; }
  var s = knowStat(kid);
  var p = s.t?Math.round(s.mas/s.t*100):0;
  document.getElementById('kdTitle').textContent = k.n;
  document.getElementById('kdSub').textContent = k._sn+' · '+k._ch;

  var h = '<div class="kd-hero"><div class="kd-path">'+esc(k._sn)+' › '+esc(k._ch)+'</div>'+
    '<div class="kd-nums">'+
      '<div class="kd-num"><b style="color:'+knColor(p)+'">'+p+'%</b><span>掌握度</span></div>'+
      '<div class="kd-num"><b>'+s.mas+'</b><span>已掌握</span></div>'+
      '<div class="kd-num"><b style="color:var(--bad)">'+s.wrong+'</b><span>错题</span></div>'+
      '<div class="kd-num"><b>'+s.t+'</b><span>相关题</span></div>'+
    '</div></div>';

  h += '<div class="kd-sec"><h3>🧠 讲透它</h3><div class="kd-core">'+
    (k.core||'').replace(/\n/g,'<br>')+'</div></div>';

  /* v10：记忆钩子 */
  if(k.hook){
    h += '<div class="kd-sec" style="border:1px solid #4b3d1d"><h3 style="color:var(--warn)">⚡ 记忆钩子</h3>'+
      '<div class="hk-box big" style="margin:0"><div class="hk-t">'+esc(k.hook)+'</div></div>';
    if(k.hs && k.hs.length){
      h += '<div class="hk-list">';
      k.hs.forEach(function(x){ h += '<div class="hk-item">'+esc(x.h)+'</div>'; });
      h += '</div>';
    }
    h += '</div>';
  }

  if(k.keys && k.keys.length){
    h += '<div class="kd-sec"><h3>🔑 关键词（看到这些词就该想到它）</h3><div class="kd-keys">';
    k.keys.slice(0,14).forEach(function(x){ h += '<span class="kd-key">'+esc(x)+'</span>'; });
    h += '</div></div>';
  }

  if(k.traps && k.traps.length){
    h += '<div class="kd-sec" style="border:1px solid #45262a"><h3 style="color:#ff8d85">⚠️ 你最容易在这里栽</h3>';
    k.traps.forEach(function(t){ h += '<div class="kd-trap"><span class="t-ic">✗</span><span>'+esc(t)+'</span></div>'; });
    h += '</div>';
  }

  h += '<div class="kd-act">'+
    '<button onclick="startKnow(\''+kid+'\',0)">刷这块（'+s.t+' 张）</button>'+
    (s.wrong>0?'<button class="ghost" onclick="startKnow(\''+kid+'\',1)">只刷错题（'+s.wrong+'）</button>':'')+
    '</div>';
  document.getElementById('kdBody').innerHTML = h;
  go('kd');
  window.scrollTo(0,0);
  setTimeout(function(){ inkAttach(document.getElementById('kdBody'), 'kd:'+kid); }, 70);
}

function startKnow(kid, onlyWrong){
  var q = knowCards(kid);
  if(onlyWrong) q = q.filter(function(c){ return cst(c.id).st<0; });
  if(!q.length){ toast(onlyWrong?'这块暂时没有错题 👍':'这块还没有题'); return; }
  /* v23 分层：错题 → 课堂新题 → 课堂已见 → 考研题垫后（不打信心） */
  q = q.slice().sort(function(a,b){
    var sa=cst(a.id), sb=cst(b.id);
    var ra=(sa.st<0?0:sa.st===0?1:2), rb=(sb.st<0?0:sb.st===0?1:2);
    if(ra!==rb) return ra-rb;
    return (isKao(a)?1:0)-(isKao(b)?1:0);
  });
  if(q.length>30) q=q.slice(0,30);
  var k = knowById(kid);
  startSession(q, (k?k.n:'知识点')+(onlyWrong?' · 错题':'')+'（'+q.length+' 张）', 'know');
}

/* 卡片内：这道题考的知识点 */
function knBlockHtml(c, full){
  var ids = (c.k||[]).slice(0, 2);
  if(!ids.length) return '';
  var h = '<div class="kn-block"><div class="kn-t">📖 这道题考的知识点</div>';
  ids.forEach(function(kid){
    var k = knowById(kid);
    if(!k) return;
    var s = knowStat(kid);
    var fullCore = knPlain(k.core);
    var brief = fullCore.slice(0, 220);
    h += '<div class="kn-card">'+
      '<div class="kn-h"><b>'+esc(k.n)+'</b><span class="kn-p">'+s.mas+'/'+s.t+' 掌握</span></div>'+
      '<div class="kn-core">'+esc(brief)+(brief.length<fullCore.length?'…':'')+'</div>'+
      '<div class="kn-btns">'+
        '<button class="mini-btn" onclick="expandKN(\''+kid+'\',this)">展开讲解 ▾</button>'+
        '<button class="mini-btn" onclick="openKD(\''+kid+'\')">完整页</button>'+
        '<button class="mini-btn" onclick="startKnow(\''+kid+'\',0)">刷这块</button>'+
      '</div>'+
      '<div class="kn-more" style="display:none" data-kid="'+kid+'"></div>'+
    '</div>';
  });
  return h + '</div>';
}

function expandKN(kid, btn){
  var k = knowById(kid);
  if(!k) return;
  var card = btn.closest('.kn-card');
  var box = card.querySelector('.kn-more');
  if(box.style.display !== 'none'){ box.style.display='none'; btn.textContent='展开讲解 ▾'; return; }
  var h = '<div style="font-size:12.5px;line-height:1.8;color:#c8d0da">'+
    (k.core||'').replace(/\n/g,'<br>')+'</div>';
  if(k.keys && k.keys.length){
    h += '<div style="margin-top:9px">';
    k.keys.slice(0,12).forEach(function(x){ h += '<span class="kn-key">'+esc(x)+'</span>'; });
    h += '</div>';
  }
  if(k.traps && k.traps.length){
    h += '<div style="margin-top:9px">';
    k.traps.forEach(function(t){ h += '<div class="kn-trap">✗ '+esc(t)+'</div>'; });
    h += '</div>';
  }
  box.innerHTML = h;
  box.style.display = 'block';
  btn.textContent = '收起 ▴';
}

/* 答错后：原地显示答案 + 知识点，不着急跳走 */
function showExplain(c){
  var box = document.getElementById('flashcard');
  if(box.querySelector('.kn-block')) return;
  var h = '';
  if(c.t==='mc' || c.t==='tf'){
    var letters='ABCDEFGH';
    var raw = c.t==='tf' ? (String(c.a).indexOf('对')===0 ? 0 : 1) : c.a;
    var disp = OPT_MAP ? OPT_MAP.indexOf(raw) : raw;
    var ansTxt = c.t==='tf' ? (raw===0?'对':'错') : (letters[disp]+'. '+esc((c.o||[])[raw]||''));
    h += '<div class="card-a"><div class="ans-label">正确答案</div><div class="ans-main">'+ansTxt+'</div>';
    if(c.n) h += '<div class="ans-note">💡 '+esc(c.n)+'</div>';
    h += hookHtml(c);
    h += notesLinkHtml(c);
    h += '</div>';
  }
  h += mixLinkHtml(c);
  h += knBlockHtml(c);
  box.insertAdjacentHTML('beforeend', h);
  document.getElementById('actRow').innerHTML =
    '<button class="act-btn next" onclick="qi++;renderCard()">下一题 →</button>';
  var kb = box.querySelector('.kn-block');
  if(kb) setTimeout(function(){ inkAttach(kb, 'card:'+c.id); }, 60);
}

/* 漏洞报告：一键复制发给 AI */
function reportWeak(){
  var wk = weakList(12);
  var d = new Date();
  var t = '【刷题漏洞报告】'+(d.getMonth()+1)+'/'+d.getDate()+' '+
    ('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2)+'\n';
  var all = stats(null);
  t += '总进度：'+all.mastered+'/'+all.total+' 已掌握，错题 '+all.wrong+' 张\n\n我的漏洞（按严重程度）：\n';
  if(!wk.length) t += '（暂无明显漏洞）\n';
  wk.forEach(function(x,i){
    t += (i+1)+'. '+x.k.n+'（'+x.k._sn+'·'+x.k._ch+'）：错 '+x.s.wrong+' / 共 '+x.s.t+'，掌握 '+x.p+'%\n';
    if(x.k.traps && x.k.traps[0]) t += '   易错：'+x.k.traps[0]+'\n';
  });
  t += '\n请针对上面这些，按严重程度给我讲：每个知识点我到底错在哪、正确思路是什么、怎么记最不容易忘。';
  var ta = document.createElement('textarea');
  ta.value = t;
  document.body.appendChild(ta);
  ta.select();
  var ok = false;
  try{ ok = document.execCommand('copy'); }catch(e){}
  document.body.removeChild(ta);
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(t).then(function(){ toast('已复制 ✅ 粘贴给我就行'); },
      function(){ toast(ok?'已复制 ✅':'复制失败，长按下面文字手动复制'); });
  }else{
    toast(ok?'已复制 ✅ 粘贴给我就行':'复制失败');
  }
  var box = document.getElementById('knowBody') || document.getElementById('statBox');
  var pre = document.getElementById('repOut');
  if(!pre){
    pre = document.createElement('pre');
    pre.id = 'repOut';
    pre.style.cssText = 'white-space:pre-wrap; font-size:11.5px; line-height:1.7; color:#9aa0a6;'+
      'background:#141a22; padding:12px; border-radius:12px; margin-top:10px; user-select:text;';
    if(box) box.appendChild(pre);
  }
  pre.textContent = t;
  pre.scrollIntoView({behavior:'smooth', block:'center'});
}

function weakBlockHtml(){
  var wk = weakList(8);
  if(!wk.length) return '';
  var h = '<div class="sec-title">⚠️ 最薄弱的知识点</div>';
  wk.forEach(function(x){
    h += '<div class="k-row" onclick="openKD(\''+x.k.id+'\')" style="margin-bottom:7px">'+
      '<div class="k-name">'+esc(x.k.n)+
        '<div class="k-mini"><i style="width:'+x.p+'%;background:'+knColor(x.p)+'"></i></div></div>'+
      (x.s.wrong>0?'<span class="k-flag">错'+x.s.wrong+'</span>':'')+
      '<span class="k-pct" style="color:'+knColor(x.p)+'">'+x.p+'%</span></div>';
  });
  h += '<button class="rep-btn" onclick="reportWeak()">📋 一键复制漏洞报告（发给我，我按点给你讲）</button>';
  return h;
}

/* ==================== v2：统计 ==================== */
function renderStat(){
  const all=stats(null);
  let due=0, fav=0;
  for(const c of HUB.cards){ const s=cst(c.id); if(s.fav) fav++; }
  due=dueList().length;
  const rate = all.seen ? Math.round(all.mastered/all.seen*100) : 0;
  let h='<div class="stat-grid">';
  h+='<div class="stat-cell"><b>'+all.mastered+'</b><span>已掌握 / 共 '+all.total+' 张</span></div>';
  h+='<div class="stat-cell"><b>'+due+'</b><span>今日待复习</span></div>';
  if(all.guessed){
    h+='<div class="stat-cell" onclick="startGuess()" style="cursor:pointer"><b style="color:var(--warn)">'+all.guessed+'</b><span>🎲 蒙对未掌握 · 点我重考</span></div>';
  }
  h+='<div class="stat-cell"><b>'+all.wrong+'</b><span>错题</span></div>';
  h+='<div class="stat-cell"><b>'+fav+'</b><span>收藏</span></div>';
  h+='<div class="stat-cell"><b>'+(S.streak||0)+'</b><span>连续学习（天）</span></div>';
  h+='<div class="stat-cell"><b>'+rate+'%</b><span>看过的卡掌握率</span></div>';
  h+='<div class="stat-cell"><b>'+Object.keys(S.hw||{}).length+'</b><span>✏️ 手写笔迹（份）</span></div>';
  h+='</div>';

  h+='<div class="sec-title">🗓 最近 7 天有学习</div><div class="heat">';
  for(let i=6;i>=0;i--){
    const d=new Date(); d.setDate(d.getDate()-i);
    const key=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
    h+='<i class="'+(S.daily[key]==='done'?'on':'')+'" title="'+key+'"></i>';
  }
  h+='</div>';

  const subjColor={生化:'#34c759', 遗传:'#bf5af2', 数学:'#ff9f0a', 英语:'#0a84ff'};
  h+='<div class="sec-title">📖 各题库掌握</div>';
  for(const dk of HUB.decks){
    const s=stats(dk.id);
    const p=s.total?Math.round(s.mastered/s.total*100):0;
    const col=subjColor[dk.subject]||'#64d2ff';
    h+='<div class="deck-item" onclick="startDeck(\''+dk.id+'\')">'+
       '<div class="deck-info" style="flex:1"><div class="d-name">'+esc(dk.name)+'</div>'+
       '<div class="d-meta">'+s.mastered+' / '+s.total+' · 错题 '+s.wrong+'</div>'+
       '<div class="pgbar"><i style="width:'+p+'%;background:'+col+'"></i></div></div>'+
       '<div class="deck-pct" style="color:'+col+'">'+p+'%</div></div>';
  }
  if(due>0) h+='<button class="big-btn" style="margin-top:14px" onclick="startDue()">🔁 刷今日到期（'+due+' 张）</button>';
  if(fav>0) h+='<button class="big-btn ghost" style="margin-top:9px" onclick="startFav()">⭐ 刷收藏（'+fav+' 张）</button>';
  /* v25：错题本 / 模考入口 */
  const wbn=wrongCards().length;
  h+='<div class="btn-row" style="margin-top:14px">'+
     '<button class="big-btn ghost" onclick="go(\'wb\')">📕 错题本 '+wbn+' 张</button>'+
     '<button class="big-btn ghost" onclick="go(\'examPick\')">🎯 模考</button></div>';
  /* v25：顽固卡 */
  const lee=leechList();
  if(lee.length){
    h+='<div class="sec-title">🩸 顽固卡 · '+lee.length+' 张</div>';
    h+='<div class="wb-head">错 4 次以上的题，原样再背一遍多半还是错。要么看钩子换个记法，要么先压 30 天。</div>';
    lee.slice(0,6).forEach(function(c){
      h+='<div class="leech-row"><div class="leech-t">'+esc(cardShort(c,42))+'<span>'+leechWhy(c)+'</span></div>'+
         '<button class="mini-btn" onclick="startCard(\''+c.id+'\')">看</button>'+
         '<button class="mini-btn" onclick="leechSkip(\''+c.id+'\')">压 30 天</button></div>';
    });
    if(lee.length>6) h+='<button class="mini-btn blue" style="margin-top:9px" onclick="leechPractice()">刷全部 '+lee.length+' 张</button>';
  }
  h+=weakBlockHtml();
  document.getElementById('statBox').innerHTML=h;
}

/* ==================== v2：键盘快捷键（电脑端） ==================== */
document.addEventListener('keydown', e=>{
  if(!document.getElementById('view-study').classList.contains('active')) return;
  if(e.target && (e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')) return;
  const c=Q[qi];
  if(e.code==='Space'){
    e.preventDefault();
    if(mode==='card' && !flipped){ flipCard(); }
    return;
  }
  if(mode==='quiz' && c){
    const n=parseInt(e.key,10);
    if(n>=1 && n<=(c.t==='tf'?2:(c.o||[]).length)){ pickOpt(n-1); return; }
  }
  if(e.key==='ArrowRight' && qi<Q.length-1){ qi++; renderCard(); return; }
  if(e.key==='ArrowLeft'  && qi>0){ qi--; renderCard(); return; }
  if(mode==='card'){
    if(e.key==='1'){ markCard(-1); }
    else if(e.key==='2'){ markCard(2); }
    else if(e.key==='3'){ markCard(1); }
  }
});


/* ==================== v5：手写笔作答 ==================== */
const HW_TYPES={term:1,saq:1,essay:1,fill:1,calc:1,input:1};
let HW={id:null,strokes:[],cur:null,ctx:null,cv:null,w:1,h:1,dpr:1,size:3.4,er:0,playing:false,sp:1,t0:0};

function hwEnsure(){ if(!S.hw) S.hw={}; if(!S.hwThumb) S.hwThumb={}; if(!S.hwOpt) S.hwOpt={onlyPen:0}; }
function hwOpt(){ hwEnsure(); return S.hwOpt; }
function hwFind(id){ for(let i=0;i<HUB.cards.length;i++){ if(HUB.cards[i].id===id) return HUB.cards[i]; } return null; }

function openHW(mode){
  hwEnsure();
  const c=Q[qi]; if(!c) return;
  mode = mode || 'write';
  HW.id=c.id; HW.playing=false; HW.cur=null;
  document.getElementById('hwQ').textContent=(c.q||'').slice(0,140);

  // 抄写模式：顶部显示参考答案，可折叠，边看边写
  const ref=document.getElementById('hwRef'), body=document.getElementById('hwRefBody');
  if(ref && body){
    if(mode==='copy'){
      body.innerHTML=refHtml(c);
      ref.classList.add('on'); ref.classList.remove('min');
      document.getElementById('hwRefBtn').textContent='收起 ▴';
    }else{
      ref.classList.remove('on'); ref.classList.remove('min');
      body.innerHTML='';
    }
  }
  const sb=document.getElementById('hwSaveBtn');
  if(sb) sb.textContent = (mode==='copy') ? '💾 保存笔迹' : '💾 保存并看答案';

  document.getElementById('hwMask').classList.add('on');
  hwSyncBtns();
  requestAnimationFrame(function(){
    hwFit();
    const rec=S.hw[c.id];
    HW.strokes = rec ? rec.strokes.map(function(s){ return {w:s.w,c:s.c,er:s.er,st:s.st||0,pts:s.pts}; }) : [];
    hwRedrawAll();
  });
}
function hwToggleRef(){
  const ref=document.getElementById('hwRef'), btn=document.getElementById('hwRefBtn');
  if(!ref) return;
  ref.classList.toggle('min');
  btn.textContent = ref.classList.contains('min') ? '展开 ▾' : '收起 ▴';
  requestAnimationFrame(function(){ hwFit(); hwRedrawAll(); });
}

/* 把卡片答案渲染成参考文本（供抄写模式用） */
function refHtml(c){
  let h='';
  if(c.t==='saq' && Array.isArray(c.a)){
    h+='<div>'+esc(c.a[0])+'</div><ul>';
    for(let i=1;i<c.a.length;i++) h+='<li>'+esc(c.a[i])+'</li>';
    h+='</ul>';
  }else if(c.subs){
    h+='<div><b>答案：</b>'+c.subs.map(function(x){return esc(x.label)+' = '+esc(x.ans);}).join('　')+'</div>';
  }else{
    h+='<div>'+esc(Array.isArray(c.a)?c.a.join('；'):c.a)+'</div>';
  }
  if(c.steps){
    h+='<div style="margin-top:7px;color:#a9b4c0;font-size:12.5px"><b>步骤：</b><br>'+
      (Array.isArray(c.steps)?c.steps.map(function(x,i){return (i+1)+'. '+esc(x);}).join('<br>'):esc(c.steps))+'</div>';
  }
  if(c.n) h+='<div style="margin-top:7px;color:#8fb0c9;font-size:12.5px">💡 '+esc(c.n)+'</div>';
  return h;
}

function hwClose(){
  document.getElementById('hwMask').classList.remove('on');
  HW.cur=null; HW.playing=false;
}
function hwFit(){
  const cv=document.getElementById('hwCv'), wrap=document.getElementById('hwWrap');
  if(!cv||!wrap) return;
  const r=wrap.getBoundingClientRect();
  const dpr=Math.min(window.devicePixelRatio||1,3);
  cv.width=Math.max(2,Math.round(r.width*dpr));
  cv.height=Math.max(2,Math.round(r.height*dpr));
  cv.style.width=r.width+'px'; cv.style.height=r.height+'px';
  HW.cv=cv; HW.w=r.width||1; HW.h=r.height||1; HW.dpr=dpr;
  const ctx=cv.getContext('2d');
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.lineCap='round'; ctx.lineJoin='round';
  HW.ctx=ctx;
  hwClearDraw();
}
function hwClearDraw(){
  const ctx=HW.ctx; if(!ctx||!HW.cv) return;
  ctx.save(); ctx.setTransform(1,0,0,1,0,0);
  ctx.fillStyle='#ffffff'; ctx.fillRect(0,0,HW.cv.width,HW.cv.height);
  ctx.restore();
}
function hwSeg(ctx,W,H,s,i){
  const a=s.pts[i-1], b=s.pts[i];
  const pr=(b.p!=null?b.p:0.5);
  ctx.lineWidth=Math.max(0.6, s.w*(0.45+pr*1.15));
  ctx.beginPath(); ctx.moveTo(a.x*W,a.y*H); ctx.lineTo(b.x*W,b.y*H); ctx.stroke();
}
function hwDrawStroke(s,uptoT,from){
  const ctx=HW.ctx,W=HW.w,H=HW.h,p=s.pts;
  if(!ctx||!p||!p.length) return;
  ctx.strokeStyle = s.er ? '#ffffff' : (s.c||'#111318');
  let end=p.length;
  if(uptoT!=null){ end=1; for(let i=0;i<p.length;i++){ if(p[i].t<=uptoT) end=i+1; else break; } }
  const start=Math.max(1, from||1);
  if(end<=1){
    if(p[0]){ ctx.fillStyle=ctx.strokeStyle; ctx.beginPath(); ctx.arc(p[0].x*W,p[0].y*H,Math.max(0.9,s.w/2),0,6.2832); ctx.fill(); }
    return;
  }
  for(let i=start;i<end;i++) hwSeg(ctx,W,H,s,i);
}
function hwRedrawAll(){ hwClearDraw(); for(let i=0;i<HW.strokes.length;i++) hwDrawStroke(HW.strokes[i],null,1); }
function hwPaintLast(){
  const s=HW.cur; if(!s||!s.pts) return;
  const n=s.pts.length;
  if(n<1) return;
  const from=s._d||1;
  if(n<=1){ hwDrawStroke(s,null,1); return; }
  hwDrawStroke(s,null,from);
  s._d=n-1;
}
function hwAddPoint(e){
  const r=HW.cv.getBoundingClientRect();
  const x=(e.clientX-r.left)/HW.w, y=(e.clientY-r.top)/HW.h;
  const last=HW.cur.pts[HW.cur.pts.length-1];
  if(last){ const dx=(x-last.x)*HW.w, dy=(y-last.y)*HW.h; if(dx*dx+dy*dy<1.1) return; }
  const pr=(e.pressure!=null && e.pressure>0 && e.pointerType==='pen') ? e.pressure : 0.5;
  HW.cur.pts.push({x:+x.toFixed(4), y:+y.toFixed(4), p:+pr.toFixed(2), t:Math.round(performance.now()-HW.cur._t0)});
}
function hwStart(e){
  const now=performance.now();
  if(!HW.strokes.length) HW.t0=now;
  /* 上一次没正常抬笔（capture 失败、移出画布又回来）：先收笔，避免丢一段 */
  if(HW.cur){ if(HW.cur.pts.length) HW.strokes.push(HW.cur); HW.cur=null; }
  /* v22 断笔续接：笔尖快速移动时会短暂离屏（接触不良），屏幕上断成一串点。
     抬笔到落笔间隔很短、且离上一点很近、粗细/橡皮没变 → 当作同一笔续上 */
  if(!HW.playing && HW.strokes.length){
    const last=HW.strokes[HW.strokes.length-1];
    const lp=last.pts[last.pts.length-1];
    if(lp){
      const r=HW.cv.getBoundingClientRect();
      const x=(e.clientX-r.left)/HW.w, y=(e.clientY-r.top)/HW.h;
      const dt=now-(HW._lastEnd||0);
      const dx=(x-lp.x)*HW.w, dy=(y-lp.y)*HW.h;
      const wantW=HW.size*(HW.er?4.5:1);
      if(dt<200 && dx*dx+dy*dy<2500 && last.er===HW.er && Math.abs(last.w-wantW)<0.01){
        HW.cur=last; HW.strokes.pop(); /* 续接：先弹出原笔，避免 hwEnd 重复 push */
        hwAddPoint(e); hwPaintLast();
        return;
      }
    }
  }
  HW.cur={w:HW.size*(HW.er?4.5:1), c:'#111318', er:HW.er, st:Math.round(now-HW.t0), _t0:now, _d:1, pts:[]};
  hwAddPoint(e);
  hwPaintLast();
}
function hwEnd(){ if(HW.cur){ if(HW.cur.pts.length) HW.strokes.push(HW.cur); HW._lastEnd=performance.now(); HW.cur=null; } }
function hwBind(){
  const cv=document.getElementById('hwCv'); if(!cv) return;
  /* v19：画布上的触摸一律不冒泡到 document，防止被当成翻页手势 */
  ['touchstart','touchmove','touchend','touchcancel'].forEach(function(t){
    cv.addEventListener(t, function(e){ e.stopPropagation(); }, {passive:true});
  });
  cv.addEventListener('pointerdown', function(e){
    if(hwOpt().onlyPen && e.pointerType==='touch') return;
    if(e.pointerType==='pen' && !hwOpt().penHint){ hwOpt().penHint=1; toast('检测到手写笔，压感已开启 ✏️'); }
    e.preventDefault();
    if(HW._leaveT){ clearTimeout(HW._leaveT); HW._leaveT=null; }
    if(HW.playing){ HW.playing=false; }
    try{ cv.setPointerCapture(e.pointerId); }catch(err){}
    hwStart(e);
  });
  cv.addEventListener('pointermove', function(e){
    if(!HW.cur) return;
    if(hwOpt().onlyPen && e.pointerType==='touch') return;
    e.preventDefault();
    if(HW._leaveT){ clearTimeout(HW._leaveT); HW._leaveT=null; }
    const evs=(e.getCoalescedEvents && e.getCoalescedEvents().length) ? e.getCoalescedEvents() : [e];
    for(let i=0;i<evs.length;i++) hwAddPoint(evs[i]);
    hwPaintLast();
  });
  ['pointerup','pointercancel'].forEach(function(t){
    cv.addEventListener(t, function(e){
      if(HW._leaveT){ clearTimeout(HW._leaveT); HW._leaveT=null; }
      hwEnd();
    });
  });
  /* capture 失败时笔尖滑出画布：别立刻断笔，等 300ms，回来就接着写 */
  cv.addEventListener('pointerleave', function(e){
    if(HW._leaveT) clearTimeout(HW._leaveT);
    HW._leaveT=setTimeout(function(){ HW._leaveT=null; hwEnd(); }, 300);
  });
  window.addEventListener('resize', function(){
    if(document.getElementById('hwMask').classList.contains('on')){
      requestAnimationFrame(function(){ hwFit(); hwRedrawAll(); });
    }
  });
}
function hwSetSize(v){ HW.size=v; HW.er=0; hwSyncBtns(); }
function hwSetEraser(v){ HW.er=v?1:0; hwSyncBtns(); }
function hwSyncBtns(){
  const on=function(id,v){ const el=document.getElementById(id); if(el) el.classList.toggle('on',!!v); };
  on('hwS1',HW.size===2&&!HW.er); on('hwS2',HW.size===3.4&&!HW.er); on('hwS3',HW.size===6&&!HW.er);
  on('hwPen',!HW.er); on('hwEra',HW.er);
  const ob=document.getElementById('hwOnlyBtn'); if(ob) ob.textContent='🖊 仅笔:'+(hwOpt().onlyPen?'开':'关');
  const sb=document.getElementById('onlyPenSetBtn'); if(sb) sb.textContent='仅笔模式：'+(hwOpt().onlyPen?'开':'关');
  const sp=document.getElementById('hwSpBtn'); if(sp) sp.textContent=HW.sp+'×';
}
function hwToggleOnlyPen(){
  hwOpt().onlyPen = hwOpt().onlyPen?0:1; save(); hwSyncBtns();
  toast(hwOpt().onlyPen?'已开启：只识别手写笔':'已关闭：笔和手指都能写');
}
function hwUndo(){ HW.strokes.pop(); HW.cur=null; HW._lastEnd=0; hwRedrawAll(); }
function hwClear(){ HW.strokes=[]; HW.cur=null; HW._lastEnd=0; hwClearDraw(); }
function hwTotal(){
  let m=0;
  for(let i=0;i<HW.strokes.length;i++){
    const s=HW.strokes[i], l=s.pts[s.pts.length-1];
    m=Math.max(m,(s.st||0)+(l?l.t:0));
  }
  return m;
}
function hwSpeed(){ HW.sp = HW.sp===1?2:(HW.sp===2?4:1); hwSyncBtns(); }
function hwPlay(){
  if(HW.playing){ HW.playing=false; document.getElementById('hwPlayBtn').textContent='▶ 回放'; return; }
  if(!HW.strokes.length){ toast('还没写东西'); return; }
  if(HW.cur){ if(HW.cur.pts.length) HW.strokes.push(HW.cur); HW.cur=null; }  hwClearDraw(); HW.playing=true;
  const btn=document.getElementById('hwPlayBtn'); btn.textContent='⏸ 停止';
  const t0=performance.now(), sp=HW.sp, total=hwTotal();
  function frame(now){
    if(!HW.playing) return;
    const T=(now-t0)*sp;
    hwClearDraw();
    for(let i=0;i<HW.strokes.length;i++){
      const s=HW.strokes[i], tt=T-(s.st||0);
      if(tt>0) hwDrawStroke(s,tt,1);
    }
    if(T<total+400) requestAnimationFrame(frame);
    else { HW.playing=false; btn.textContent='▶ 回放'; }
  }
  requestAnimationFrame(frame);
}
function hwThumb(w){
  const src=HW.cv; if(!src) return '';
  const h=Math.max(1,Math.round(w*src.height/src.width));
  const c=document.createElement('canvas'); c.width=w; c.height=h;
  const x=c.getContext('2d'); x.fillStyle='#fff'; x.fillRect(0,0,w,h);
  x.drawImage(src,0,0,w,h);
  try{ return c.toDataURL('image/jpeg',0.5); }catch(e){ return ''; }
}
function hwGC(){
  const ids=Object.keys(S.hw);
  if(ids.length<=80) return;
  ids.sort(function(a,b){ return (S.hw[a].at||0)-(S.hw[b].at||0); });
  const out=ids.slice(0, ids.length-80);
  for(let i=0;i<out.length;i++){ delete S.hw[out[i]]; if(S.hwThumb) delete S.hwThumb[out[i]]; }
}
function hwSave(){
  hwEnsure();
  if(!HW.id) return false;
  if(!HW.strokes.length){ toast('还没写呢 ✏️'); return false; }
  const st=[];
  for(let i=0;i<HW.strokes.length;i++){
    const s=HW.strokes[i];
    st.push({w:s.w,c:s.c,er:s.er,st:s.st,pts:s.pts});
  }
  S.hw[HW.id]={w:HW.w,h:HW.h,at:Date.now(),strokes:st};
  const th=hwThumb(300);
  if(th) S.hwThumb[HW.id]=th;
  hwGC();
  try{ save(); }catch(e){ delete S.hw[HW.id]; try{ save(); }catch(e2){} toast('本机存储空间满了，请先删掉一些旧笔迹'); return false; }
  toast('笔迹已保存 ✅');
  return true;
}
function hwSaveFlip(){
  if(!hwSave()) return;
  const c=Q[qi];
  hwClose();
  if(!flipped){ flipCard(); return; }
  hwInjectMine(c);   // 已在看答案：只补一块"我的笔迹"，不整页重绘
}
/* 把刚保存的笔迹塞回答案区 */
function hwInjectMine(c){
  const box=document.getElementById('flashcard');
  const a=box.querySelector('.card-a'); if(!a||!c) return;
  const old=a.querySelector('.hw-mine'); if(old) old.remove();
  if(!(S.hw && S.hw[c.id])) return;
  const d=document.createElement('div');
  d.className='hw-mine';
  d.innerHTML='<div class="hw-mine-t">✏️ 我的笔迹</div>'+
    ((S.hwThumb&&S.hwThumb[c.id])?'<img class="hw-thumb" style="cursor:zoom-in" onclick="event.stopPropagation();imgFull(this.src,\'手写笔迹 · 点开可缩放\')" src="'+escA(S.hwThumb[c.id])+'" alt="笔迹">':'')+
    '<div class="hw-mine-b"><button class="mini-btn" onclick="openHW(\'copy\')">重写 / 回放</button>'+
    '<button class="mini-btn" onclick="hwDel(\''+c.id+'\')">删除</button></div>';
  a.appendChild(d);
}
function hwDel(id){
  hwEnsure();
  const wasFlipped = (Q[qi] && Q[qi].id===id) ? flipped : false;
  delete S.hw[id]; if(S.hwThumb) delete S.hwThumb[id];
  save(); toast('已删除');
  if(document.getElementById('hwLibMask').classList.contains('on')) openHWLib();
  else if(Q[qi] && Q[qi].id===id){ renderCard(); if(wasFlipped) flipCard(); }
}
function hwExport(){
  if(!HW.cv) return;
  const c=hwFind(HW.id);
  const nm='笔迹-'+(c&&c.q?c.q.slice(0,14):HW.id).replace(/[\\/:*?"<>|\n]/g,'')+'.png';
  HW.cv.toBlob(function(b){
    if(!b){ toast('导出失败'); return; }
    const a=document.createElement('a');
    a.href=URL.createObjectURL(b); a.download=nm;
    document.body.appendChild(a); a.click();
    setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 4000);
    toast('已导出图片，发给我就能看 ✏️');
  },'image/png');
}
function openHWLib(){
  hwEnsure();
  const ids=Object.keys(S.hw).sort(function(a,b){ return (S.hw[b].at||0)-(S.hw[a].at||0); });
  document.getElementById('hwLibCount').textContent='共 '+ids.length+' 份';
  const g=document.getElementById('hwLibGrid');
  if(!ids.length){
    g.innerHTML='<div class="hw-empty">还没有手写笔迹。<br>去做简答 / 名词解释题，点卡片下方的<br><b>✏️ 手写作答</b> 就能用笔写。</div>';
  }else{
    let h='';
    for(let i=0;i<ids.length;i++){
      const id=ids[i], c=hwFind(id);
      const th=S.hwThumb[id]||'';
      const title=c? (c.q||'').slice(0,26) : id;
      h+='<div class="hw-cell" onclick="hwLibOpen(\''+id+'\')">'+
         '<span class="hw-del" onclick="event.stopPropagation();hwDel(\''+id+'\')">删除</span>'+
         (th?'<img style="cursor:zoom-in" onclick="event.stopPropagation();imgFull(this.src,\''+escA(title)+' · 手写笔迹\')" src="'+escA(th)+'" alt="">':'<div class="hw-noimg">无预览</div>')+
         '<div class="hw-cell-t">'+esc(title)+'</div></div>';
    }
    g.innerHTML=h;
  }
  document.getElementById('hwLibMask').classList.add('on');
}
function hwLibClose(){ document.getElementById('hwLibMask').classList.remove('on'); }
function hwLibOpen(id){
  const c=hwFind(id); if(!c){ toast('题目已不在库中'); return; }
  hwLibClose();
  Q=[c]; qi=0; todayCounted=null;
  document.getElementById('studyTitle').textContent='笔迹回看';
  document.getElementById('studySub').textContent='';
  go('study');
  renderCard();
  openHW();
}
function hwExportAll(){
  hwEnsure();
  const ids=Object.keys(S.hw);
  if(!ids.length){ toast('还没有笔迹'); return; }
  const out=[];
  for(let i=0;i<ids.length;i++){
    const id=ids[i], c=hwFind(id);
    out.push({id:id, q:c?(c.q||''):'', deck:c?c.deck:'', at:S.hw[id].at, strokes:S.hw[id].strokes});
  }
  const blob=new Blob([JSON.stringify(out)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob); a.download='手写笔迹-'+today()+'.json';
  document.body.appendChild(a); a.click();
  setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 4000);
  toast('已导出 '+ids.length+' 份笔迹数据');
}

/* ---- 注入点：卡片上手写按钮 ---- */




/* ==================== v12-ink 讲解批注 ==================== */
var INK = {key:null, host:null, cv:null, ctx:null, on:false, mode:'pen',
           onlyPen: (typeof matchMedia==='function' && matchMedia('(pointer: coarse)').matches),
           strokes:[], cur:null, w:0, h:0, dpr:1, penLive:false, penTimer:null};
var inkTimer = null, inkRO = null;

function inkData(key){
  return (S.ink && S.ink[key]) ? S.ink[key] : {strokes:[]};
}
function inkAttach(host, key){
  if(!host) return;
  var old = host.querySelector('.ink-cv'); if(old) old.remove();
  host.classList.add('ink-host');
  var cv = document.createElement('canvas');
  cv.className = 'ink-cv';
  host.appendChild(cv);
  INK.host = host; INK.cv = cv; INK.ctx = cv.getContext('2d');
  INK.key = key; INK.on = false; INK.cur = null;
  INK.strokes = (inkData(key).strokes || []).slice();
  cv.style.pointerEvents = 'none';
  inkBind(cv);
  inkWatch();
  inkResize();
  inkShowBar(true);
  inkSyncBar();
}
function inkBind(cv){
  /* v19：批注画布上的滑动只属于笔，不当翻页/滚动 */
  ['touchstart','touchend','touchcancel'].forEach(function(t){
    cv.addEventListener(t, function(e){ if(INK.on) e.stopPropagation(); }, {passive:true});
  });
  /* 笔正在写时，手指/手掌的触摸全部吃掉：既不滚页也不翻页（palm rejection） */
  cv.addEventListener('touchmove', function(e){
    if(!INK.on) return;
    e.stopPropagation();
    if(INK.cur || INK.penLive) e.preventDefault();
  }, {passive:false});
  cv.addEventListener('pointerdown', inkDown);
  cv.addEventListener('pointermove', inkMove);
  cv.addEventListener('pointerup', inkUp);
  cv.addEventListener('pointercancel', inkUp);
  cv.addEventListener('pointerleave', function(e){ if(INK.cur) inkUp(e); });
}
function inkWatch(){
  if(inkRO) inkRO.disconnect();
  if(!INK.host || typeof ResizeObserver === 'undefined') return;
  inkRO = new ResizeObserver(function(){ inkResize(); });
  inkRO.observe(INK.host);
}
function inkResize(){
  if(!INK.cv || !INK.host) return;
  var w = INK.host.clientWidth;
  var h = Math.max(INK.host.clientHeight, INK.host.scrollHeight);
  if(!w || !h) return;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  if(INK.cv.width === Math.round(w*dpr) && INK.cv.height === Math.round(h*dpr)) return;
  INK.dpr = dpr; INK.w = w; INK.h = h;
  INK.cv.width = Math.round(w*dpr); INK.cv.height = Math.round(h*dpr);
  INK.cv.style.width = w + 'px'; INK.cv.style.height = h + 'px';
  inkRedraw();
}
function inkRedraw(){
  var c = INK.ctx; if(!c) return;
  c.setTransform(1,0,0,1,0,0);
  c.clearRect(0,0,INK.cv.width,INK.cv.height);
  c.scale(INK.dpr, INK.dpr);
  for(var i=0;i<INK.strokes.length;i++) inkPaint(c, INK.strokes[i], true);
}
/* 整条重绘（whole=true）或只画最后一段（增量） */
function inkPaint(c, s, whole){
  var p = s.p; if(!p || p.length < 2) return;
  c.save();
  c.lineCap = 'round'; c.lineJoin = 'round';
  c.globalAlpha = (s.a === undefined ? 1 : s.a);
  c.strokeStyle = s.c || '#ffd166';
  c.lineWidth = s.w || 3;
  c.globalCompositeOperation = s.e ? 'destination-out' : 'source-over';
  if(p.length < 6){
    c.beginPath();
    c.arc(p[0]*INK.w, p[1]*INK.h, (s.w||3)/2, 0, Math.PI*2);
    c.fillStyle = s.c || '#ffd166'; c.fill();
    c.restore(); return;
  }
  c.beginPath();
  c.moveTo(p[0]*INK.w, p[1]*INK.h);
  for(var i=3;i<p.length;i+=3) c.lineTo(p[i]*INK.w, p[i+1]*INK.h);
  c.stroke();
  c.restore();
}
function inkPos(e){
  var r = INK.cv.getBoundingClientRect();
  return [(e.clientX - r.left)/r.width, (e.clientY - r.top)/r.height];
}
function inkStyle(){
  if(INK.mode === 'hl') return {c:'#ffe066', w:17, a:0.24, e:0};
  if(INK.mode === 'er') return {c:'#000', w:22, a:1, e:1};
  return {c:'#ff5f57', w:3, a:1, e:0};
}
function inkDown(e){
  if(!INK.on) return;
  if(e.pointerType === 'pen') INK.penLive = true;
  if(INK.onlyPen && e.pointerType === 'touch') return;
  e.preventDefault();
  try{ INK.cv.setPointerCapture(e.pointerId); }catch(err){}
  var pos = inkPos(e), st = inkStyle();
  /* v22 断笔续接：快速划重点时笔尖短暂离屏，别断成点 */
  var now = performance.now();
  if(INK.strokes.length){
    var last = INK.strokes[INK.strokes.length-1], lp = last.p;
    if(lp && lp.length>=3){
      var dt = now-(INK._lastEnd||0);
      var x0 = lp.length>=6 ? lp[lp.length-3] : lp[0];
      var y0 = lp.length>=6 ? lp[lp.length-2] : lp[1];
      var dx = pos[0]-x0, dy = pos[1]-y0;
      if(dt<200 && dx*dx+dy*dy<0.0025 && last.c===st.c && last.w===st.w && (last.e||0)===(st.e||0)){
        INK.cur = last;
        INK.cur.p.push(pos[0], pos[1], e.pressure||0.5);
        var c2 = INK.ctx, p2 = INK.cur.p, n2 = p2.length;
        c2.save(); c2.lineCap='round'; c2.lineJoin='round';
        c2.globalAlpha=INK.cur.a; c2.strokeStyle=INK.cur.c; c2.lineWidth=INK.cur.w;
        c2.globalCompositeOperation=INK.cur.e ? 'destination-out' : 'source-over';
        c2.beginPath();
        c2.moveTo((n2>=6?p2[n2-6]:p2[0])*INK.w, (n2>=6?p2[n2-5]:p2[1])*INK.h);
        c2.lineTo(p2[n2-3]*INK.w, p2[n2-2]*INK.h);
        c2.stroke(); c2.restore();
        return;
      }
    }
  }
  INK.cur = {c:st.c, w:st.w, a:st.a, e:st.e, p:[pos[0], pos[1], e.pressure||0.5]};
  INK.strokes.push(INK.cur);
  var c = INK.ctx;
  c.save();
  c.globalAlpha = st.a; c.fillStyle = st.c;
  c.globalCompositeOperation = st.e ? 'destination-out' : 'source-over';
  c.beginPath(); c.arc(pos[0]*INK.w, pos[1]*INK.h, st.w/2, 0, Math.PI*2); c.fill();
  c.restore();
}
function inkMove(e){
  if(!INK.on || !INK.cur) return;
  if(INK.onlyPen && e.pointerType === 'touch') return;
  e.preventDefault();
  var p = INK.cur.p, pos = inkPos(e);
  var x0 = p[p.length-3], y0 = p[p.length-2];
  p.push(pos[0], pos[1], e.pressure||0.5);
  var c = INK.ctx;
  c.save();
  c.lineCap='round'; c.lineJoin='round';
  c.globalAlpha = INK.cur.a; c.strokeStyle = INK.cur.c; c.lineWidth = INK.cur.w;
  c.globalCompositeOperation = INK.cur.e ? 'destination-out' : 'source-over';
  c.beginPath(); c.moveTo(x0*INK.w, y0*INK.h); c.lineTo(pos[0]*INK.w, pos[1]*INK.h); c.stroke();
  c.restore();
}
function inkUp(e){
  if(e && e.pointerType === 'pen' && INK.penLive){
    if(INK.penTimer) clearTimeout(INK.penTimer);
    INK.penTimer = setTimeout(function(){ INK.penLive = false; }, 600);
  }
  if(INK.cur){
    INK._lastEnd = performance.now();
    INK.cur = null;
  }
  inkQueueSave();
}
function inkQueueSave(){
  if(!INK.key) return;
  if(inkTimer) clearTimeout(inkTimer);
  inkTimer = setTimeout(inkSaveNow, 700);
}
function inkSaveNow(){
  if(!INK.key) return;
  if(inkTimer){ clearTimeout(inkTimer); inkTimer = null; }
  if(!S.ink) S.ink = {};
  if(!INK.strokes.length){
    if(S.ink[INK.key]){ delete S.ink[INK.key]; save(); }
    return;
  }
  S.ink[INK.key] = {v:1, at:Date.now(), strokes: INK.strokes.map(function(s){
    return {c:s.c, w:s.w, a:s.a, e:s.e,
      p: s.p.map(function(v){ return Math.round(v*10000)/10000; })};
  })};
  save();
}
function inkToggle(){
  if(!INK.cv) return;
  INK.on = !INK.on;
  INK.cv.style.pointerEvents = INK.on ? 'auto' : 'none';
  INK.cv.style.touchAction = INK.on ? (INK.onlyPen ? 'pan-y' : 'none') : 'auto';
  var tip = document.getElementById('inkTip');
  if(tip){
    tip.classList.toggle('on', INK.on && !INK.onlyPen);
    if(INK.on){ setTimeout(function(){ tip.classList.remove('on'); }, 3200); }
  }
  if(!INK.on){
    INK.penLive = false;
    if(INK.penTimer){ clearTimeout(INK.penTimer); INK.penTimer = null; }
    inkSaveNow();
  }
  inkSyncBar();
}
function inkSetMode(m){
  INK.mode = m;
  if(!INK.on) inkToggle();
  inkSyncBar();
  toast(m==='pen' ? '笔：随手划重点' : (m==='hl' ? '荧光笔：半透明划一段' : '橡皮：擦掉笔迹'));
}
function inkTogglePenOnly(){
  INK.onlyPen = !INK.onlyPen;
  if(INK.on) INK.cv.style.touchAction = INK.onlyPen ? 'pan-y' : 'none';
  var tip = document.getElementById('inkTip');
  if(tip) tip.classList.toggle('on', INK.on && !INK.onlyPen);
  inkSyncBar();
  toast(INK.onlyPen ? '仅笔模式：手指滚动，手写笔/鼠标画' : '手指也能画了（要滚动先退出）');
}
function inkUndo(){
  if(!INK.strokes.length){ toast('没有可撤销的笔迹'); return; }
  INK._lastEnd=0;
  INK.strokes.pop();
  inkRedraw(); inkSaveNow();
}
function inkClear(){
  if(!INK.strokes.length) return;
  if(!confirm('清空这一页的所有批注？')) return;
  INK.strokes = []; INK._lastEnd=0;
  inkRedraw(); inkSaveNow();
  toast('已清空');
}
function inkSyncBar(){
  var b = document.getElementById('inkBar'); if(!b) return;
  var t = document.getElementById('inkToggleBtn');
  if(t) t.classList.toggle('on', INK.on);
  var p1 = document.getElementById('inkPenBtn'); if(p1) p1.classList.toggle('on', INK.mode==='pen');
  var p2 = document.getElementById('inkHlBtn'); if(p2) p2.classList.toggle('on', INK.mode==='hl');
  var p3 = document.getElementById('inkErBtn'); if(p3) p3.classList.toggle('on', INK.mode==='er');
}
function inkShowBar(on){
  var b = document.getElementById('inkBar'); if(!b) return;
  b.classList.toggle('on', !!on);
  if(!on){ INK.host=null; INK.cv=null; INK.ctx=null; INK.key=null; INK.on=false; }
}
function inkDetach(){
  inkSaveNow();
  inkShowBar(false);
}

/* ==================== v11-term 术语点查 / 蒙对判定 / 访客模式 ==================== */
var GUEST = /[?&]guest=1/.test(location.search);
var TERMS = {"肽平面":"肽键的 C—N 键有双键性质，六个原子（Cα-C-O-N-H-Cα）共处一个平面，不能自由旋转。考点：肽平面内旋转受限，只有 Cα 两侧的键能转。","二硫键":"两个半胱氨酸的 —SH 被氧化连成的 S—S 键。在体外能稳定三级结构，还原剂（β-巯基乙醇）一加就断。","α螺旋":"蛋白质最常见的二级结构：右手螺旋，每圈 3.6 个残基、螺距 0.54 nm、每个残基上升 0.15 nm。氢键在 i 与 i+4 之间。","β折叠":"多肽链伸展成锯齿状、相邻链间形成氢键的片层结构。链间距约 0.47 nm，每残基上升 0.35 nm。分平行和反平行，反平行更稳定。","β转角":"让多肽链拐弯的 4 个残基结构，常见于球状蛋白表面，甘氨酸和脯氨酸出现频率高。","超二级结构":"二级结构之间的组合，如 βαβ、螺旋-转角-螺旋。它比二级结构高一级、比结构域低一级。","结构域":"球状蛋白中能独立折叠、往往承担一项独立功能的区域。一个大蛋白常有多个结构域。","亚基":"寡聚蛋白中每条独立的多肽链。四级结构讲的是亚基之间怎么排布，不是亚基内部怎么折。","变性":"理化学因素破坏空间结构，但不断裂肽键。表现：溶解度下降、黏度下降、A260 升高、活性丧失；去除因素可复性。","复性":"变性程度不深时，去掉变性因素后蛋白自发恢复原构象（Anfinsen 核糖核酸酶实验）。说明一级结构决定高级结构。","盐析":"加高浓度中性盐（硫酸铵）夺走水化层、中和电荷，让蛋白沉淀。可逆，不破坏结构，用于粗分离。","等电点":"蛋白净电荷为零时的 pH，记作 pI。此时溶解度最低、电泳不动。pH>pI 带负电，pH<pI 带正电。","凝胶过滤":"分子筛层析。大分子进不去孔、先出来；小分子钻进孔里、后出来。别记反。","透析":"用半透膜把小分子（盐、小肽）扩散出去，留下大分子。不能用来测分子量。","沉降系数":"超速离心时颗粒的沉降速度指标，单位 S（10⁻¹³ s）。它不是分子量，别拿它当 Da 用。","肽键":"一个氨基酸的羧基与下一个氨基酸的氨基脱水缩合形成的酰胺键，有部分双键性质。","必需氨基酸":"人体不能合成、必须从食物摄取的 8 种：缬、异亮、苯丙、蛋（甲硫）、色、苏、赖、亮。婴儿再加组氨酸。","疏水氨基酸":"侧链非极性的： Gly、Ala、Val、Leu、Ile、Pro、Phe、Met、Trp。它们倾向藏在蛋白内部。","含硫氨基酸":"甲硫氨酸（Met，含 —S—CH₃）和半胱氨酸（Cys，含 —SH）。只有这两个含硫。","芳香族氨基酸":"Phe、Tyr、Trp，280 nm 有紫外吸收，所以测蛋白浓度用 A280。Trp 吸收最强。","茚三酮":"氨基酸的通用显色剂，加热后生成蓝紫色（脯氨酸显黄色）。纸层析/薄层显色常用。","酶促反应":"酶催化的化学反应。特点：高效、专一、条件温和、可调节，比非催化反应快 10⁶ 倍以上。","核酶":"有催化活性的 RNA。证明 RNA 既能存遗传信息又能催化，支持 RNA 世界假说。","活性中心":"酶分子上直接结合底物并催化反应的区域，由几个必需基团构成（结合部位 + 催化部位）。","必需基团":"酶活性必需的那些侧链基团，包括结合基团和催化基团。构象改变后它们相对位置变了，酶就失活。","辅酶":"与酶蛋白结合疏松、可用透析去掉的小分子有机物质，如 NAD⁺、CoA。本质多为维生素衍生物。","辅基":"与酶蛋白共价紧密结合、透析去不掉的小分子，如 FAD、血红素。","米氏方程":"v = Vmax·[S] / (Km + [S])。描述单底物酶促反应速度与底物浓度的关系，曲线是双曲线。","米氏常数":"即 Km，v = ½Vmax 时的底物浓度。Km 越小，酶对底物亲和力越大；Km 是酶的特征常数，与浓度无关。","Vmax":"最大反应速度，所有酶都被底物饱和时的速度。与酶的总浓度成正比。","转换数":"每秒钟每个酶分子催化底物转化的分子数，也叫催化常数 kcat，衡量催化效率。","比活力":"每毫克蛋白酶所含的活力单位数，用来比较不同酶制品的纯度。","酶活力单位":"衡量酶量的指标。国际单位 U：每分钟催化 1 μmol 底物转化的酶量。","竞争性抑制":"抑制剂和底物抢同一个活性中心。表现：Km 变大、Vmax 不变，加大底物浓度可解除。","非竞争性抑制":"抑制剂结合在活性中心以外，底物和抑制剂可同时结合。表现：Km 不变、Vmax 变小。","反竞争性抑制":"抑制剂只与酶-底物复合物结合。表现：Km 变小、Vmax 变小。","不可逆抑制":"抑制剂与酶共价结合、不能透析除去，如有机磷抑制胆碱酯酶、青霉素抑制转肽酶。","别构酶":"多亚基酶，除活性中心外还有别构中心；结合调节物后构象改变，v-[S] 曲线是 S 形而不是双曲线。","别构调节":"小分子（别构效应物）结合在别构中心，改变酶构象从而激活或抑制，是快速调节方式。","协同效应":"一个亚基结合配体后，改变其余亚基的亲和力。正协同使曲线变 S 形，负协同使其更平缓。","诱导契合":"底物接近时，酶的活性中心会改变构象去适配底物（「手」去适应「手套」），比刚性锁钥模型更准确。","催化三联体":"丝氨酸蛋白酶活性中心的三联体 Ser-His-Asp，通过电荷接力让 Ser 的羟基变成强亲核体。","最适pH":"酶活性最高时的 pH。过酸过碱会改变基团解离状态或使酶变性。胃蛋白酶偏酸，胰蛋白酶偏碱。","酶原激活":"无活性的酶前体被切掉一段肽后变成有活性的酶，如胰蛋白酶原→胰蛋白酶、胃蛋白酶原→胃蛋白酶。","核苷酸":"核苷 + 磷酸。核苷 = 碱基 + 戊糖。DNA 的糖是脱氧核糖（2′-H），RNA 是核糖（2′-OH）。","磷酸二酯键":"一个核苷酸的 3′-OH 与下一个的 5′-磷酸形成的键，是核酸骨架的连接方式，方向 5′→3′。","Chargaff定律":"双链 DNA 中 A=T、G=C，所以 (A+G)=(T+C)、(A+T)/(G+C) 随物种而异，可作物种标记。","Tm值":"解链温度，DNA 双链一半解开时的温度。GC 含量越高 Tm 越高，与分子长短关系不大。","增色效应":"DNA 变性后双链解开，碱基暴露，260 nm 吸光度升高。复性后回落（减色效应）。","超螺旋":"双链 DNA 在空间上再拧几圈形成的螺旋。负超螺旋有利于解链，拓扑异构酶负责调整。","核小体":"染色质的基本单位：146 bp DNA 缠在组蛋白八聚体（H2A/H2B/H3/H4 各两分子）上 1.75 圈。","组蛋白":"富含赖氨酸和精氨酸的碱性蛋白，与 DNA 结合。H1 连接核小体，其余四种构成八聚体。","半保留复制":"每条子链都保留一条母链，形成两个杂合双链。Meselson-Stahl 用 ¹⁵N 密度梯度离心证明。","复制叉":"DNA 解链后形成的 Y 形结构，两条链分别作模板，一条连续（前导链）、一条不连续（后随链）。","冈崎片段":"后随链上不连续合成的短片段（原核约 1000-2000 nt），由 DNA 连接酶连成长链。","引物酶":"合成一小段 RNA 引物，为 DNA 聚合酶提供 3′-OH 起点。DNA 聚合酶不能从头起始。","端粒酶":"一种逆转录酶，自带 RNA 模板，给真核线性染色体 3′ 端补重复序列，解决末端缩短问题。","Klenow片段":"大肠杆菌 DNA 聚合酶 I 被切掉 5′→3′ 外切活性后剩的大片段，用于补平、测序。","切除修复":"切掉损伤的一段，用另一条链作模板补上，再由连接酶封口。包括碱基切除（BER）和核苷酸切除（NER）。","光复活":"光复活酶利用可见光能量直接拆掉紫外造成的嘧啶二聚体，是原核特有的修复方式。","错配修复":"复制后识别并纠正错配碱基，靠甲基化标记哪条是新链，把新链上的错配换掉。","SOS反应":"DNA 严重损伤时诱导出的应急修复系统，容易出错（易错修复），伴随诱变。","转录":"以 DNA 一条链为模板、由 RNA 聚合酶合成 RNA 的过程。原核一个酶全包，真核分 I/II/III。","启动子":"RNA 聚合酶识别并结合、启动转录的 DNA 序列。原核有 -10 区（TATAAT）和 -35 区。","终止子":"转录终止信号。不依赖 ρ 因子的靠发夹结构 + 一串 U；依赖 ρ 因子的靠 ρ 蛋白追上来解链。","操纵子":"原核基因表达的调控单元 = 启动子 + 操纵基因 + 一串结构基因。一个开关管一组基因。","操纵基因":"阻遏蛋白结合的 DNA 序列，位于启动子附近。阻遏蛋白一结合，RNA 聚合酶就过不去。","阻遏蛋白":"结合操纵基因、挡住转录的蛋白。乳糖操纵子里是 Lac I 产物，有乳糖时被诱导物拉走。","衰减子":"色氨酸操纵子里的额外调控：转录刚起步就靠翻译速度决定是否提前终止，属精细微调。","增强子":"真核中远距离起作用的调控序列，方向位置都可变，靠转录因子拉近启动子起作用。","外显子":"基因中保留在成熟 mRNA 里的序列。注意：外显子不等于「编码区」，两端还有 UTR。","内含子":"转录后被剪接掉的序列。真核基因普遍有，原核大多没有。","剪接":"把内含子切掉、外显子连起来。靠 5′GU、3′AG 剪接位点和剪接体完成，可变剪接能一个基因出多种蛋白。","帽子结构":"真核 mRNA 5′ 端的 7-甲基鸟苷帽（m⁷G），保护 mRNA、帮助核糖体识别。","polyA尾":"真核 mRNA 3′ 端的一串腺苷酸，增加稳定性、便于出核和翻译。原核没有。","逆转录":"以 RNA 为模板合成 DNA，由逆转录酶催化。中心法则的补充，也是 cDNA 合成的原理。","中心法则":"DNA→DNA（复制）、DNA→RNA（转录）、RNA→蛋白（翻译）。例外：RNA→DNA（逆转录）、RNA→RNA（RNA 复制）。","遗传密码":"mRNA 上每 3 个碱基决定一个氨基酸。64 个密码子：61 个编码、3 个终止（UAA/UAG/UGA）。AUG 兼起始。","简并性":"一个氨基酸可由多个密码子编码。减少突变危害，同义突变往往不改变氨基酸。","摆动假说":"tRNA 反密码子第一位与密码子第三位配对不严格，所以一个 tRNA 能认多个密码子。","SD序列":"原核 mRNA 起始密码子上游的富嘌呤序列，与 16S rRNA 配对，定位起始位置。","核糖体":"翻译机器，原核 70S（50S+30S），真核 80S（60S+40S）。肽酰转移酶活性在 rRNA 上，是核酶。","tRNA":"搬运氨基酸的适配器，三叶草二级结构、倒 L 三级结构，3′ 端 CCA 挂氨基酸。","信号肽":"新生肽 N 端的一段疏水序列，引导蛋白进入内质网，之后被切掉。","糖酵解":"葡萄糖→2 丙酮酸，共 10 步，净得 2 ATP + 2 NADH。三个限速酶：己糖激酶、磷酸果糖激酶-1、丙酮酸激酶。","底物水平磷酸化":"代谢物之间直接转移磷酸基团生成 ATP，不经过呼吸链。糖酵解里有两处。","三羧酸循环":"乙酰CoA 与草酰乙酸缩合成柠檬酸，转一圈又回到草酰乙酸。一轮得 3 NADH + 1 FADH₂ + 1 GTP，放出 2 CO₂。","回补反应":"补充 TCA 中间产物被抽走后的空缺，最主要的是丙酮酸羧化酶生成草酰乙酸。","丙酮酸脱氢酶复合体":"把丙酮酸氧化脱羧成乙酰CoA 的多酶复合体，需要 TPP、硫辛酸、CoA、FAD、NAD⁺ 五种辅因子。","糖异生":"由非糖物质（乳酸、甘油、生糖氨基酸）合成葡萄糖。三个绕不过去的步骤各有替代酶。","磷酸戊糖途径":"产生 NADPH 和 5-磷酸核糖，不产 ATP。限速酶是 6-磷酸葡萄糖脱氢酶（G6PD）。","乳酸发酵":"丙酮酸被乳酸脱氢酶还原成乳酸，目的是再生 NAD⁺，让糖酵解能继续。","糖原分解":"糖原磷酸化酶从非还原端切下 1-磷酸葡萄糖，肌肉缺葡萄糖-6-磷酸酶，所以不能直接补血糖。","氧化磷酸化":"NADH/FADH₂ 经呼吸链把电子交给氧，同时把能量转成 ATP 的过程，是细胞 ATP 的主要来源。","呼吸链":"线粒体内膜上四个复合体组成的电子传递链，把 NADH 的电子逐级传给 O₂，同时把 H⁺ 泵到膜间隙。","化学渗透学说":"电子传递泵出的 H⁺ 形成跨膜电化学梯度，H⁺ 回流时驱动 ATP 合酶合成 ATP。Mitchell 提出。","ATP合酶":"F₀F₁ 复合体，F₀ 是 H⁺ 通道、F₁ 负责催化。H⁺ 流回基质时带动转子旋转，构象变化把 ADP+Pi 变成 ATP。","P/O比":"每对电子经呼吸链传递时生成的 ATP 数。按教材口径：NADH 为 2.5，FADH₂ 为 1.5。","解偶联剂":"让 H⁺ 绕过 ATP 合酶回流，电子照传、ATP 不产，能量变成热。如 2,4-二硝基苯酚（DNP）。","穿梭系统":"把胞质 NADH 的还原当量运进线粒体的方式。甘油-3-磷酸穿梭得 1.5 ATP 当量，苹果酸-天冬氨酸穿梭得 2.5。","β氧化":"脂肪酸在 β 碳上被反复氧化切下乙酰CoA，每轮四步：脱氢、加水、再脱氢、硫解，得 1 FADH₂ + 1 NADH + 1 乙酰CoA。","肉碱穿梭":"长链脂酰CoA 不能直接进线粒体，要转成脂酰肉碱由转运体带进去，进去后再变回脂酰CoA。","酮体":"乙酰乙酸、β-羟丁酸、丙酮，肝内生成、肝外利用（肝缺利用酮体的酶）。饥饿时给大脑供能。","丙二酰CoA":"脂肪酸合成的第一个中间物，同时抑制肉碱转移酶 I，阻止新合成的脂肪酸被立刻氧化掉。","乙酰CoA羧化酶":"脂肪酸合成的限速酶，把乙酰CoA 羧化成丙二酰CoA。柠檬酸激活、软脂酰CoA 抑制。","乙醛酸循环":"植物和细菌特有，绕开 TCA 的两个脱羧步骤，把脂肪酸变成糖。关键酶：异柠檬酸裂解酶、苹果酸合酶。","生糖氨基酸":"能净生成葡萄糖的氨基酸，多数氨基酸属此类。亮氨酸和赖氨酸是纯生酮的。","转氨基作用":"氨基酸把氨基交给 α-酮酸，生成新的氨基酸和新的 α-酮酸。辅酶是磷酸吡哆醛（VB₆）。","氧化脱氨基":"谷氨酸脱氢酶把谷氨酸变成 α-酮戊二酸 + NH₃，是唯一重要的氧化脱氨基反应。","尿素循环":"把有毒的 NH₃ 变成无毒的尿素，在肝里进行。限速酶是氨甲酰磷酸合成酶 I，Asp 提供第二个氮。","一碳单位":"由一个碳原子组成的基团（甲基、亚甲基、甲酰基等），由四氢叶酸（THF）携带，参与核苷酸合成。","SAM":"S-腺苷甲硫氨酸，体内最主要的甲基供体，参与 DNA 甲基化、肌酸合成等。","痛风":"尿酸生成过多或排出不畅，尿酸盐结晶沉积在关节。嘌呤分解终产物是尿酸，别和尿素搞混。","等位基因":"同源染色体同一位置上控制同一性状的不同形式，如 A 和 a。","基因型":"个体的基因组合（AA、Aa、aa），是内在的。","表现型":"基因型与环境共同作用表现出的性状，是外在的。","相对性状":"同一性状的不同表现类型，如豌豆的高茎和矮茎。别理解成「两个性状」。","测交":"用隐性纯合体与待测个体杂交，后代性状比例直接反映待测个体产生的配子比例。","回交":"与亲本之一杂交。若与隐性亲本回交则等同于测交。","分离定律":"一对等位基因在减数分裂时彼此分开、进入不同配子。实质是等位基因的分离。","自由组合定律":"两对及以上等位基因位于非同源染色体上时，各自独立分离、自由组合。","完全显性":"杂合体表现与显性纯合体完全相同。","不完全显性":"杂合体表现介于两亲本之间（如粉红花），F₂ 表现型比例 = 基因型比例 1:2:1。","共显性":"杂合体同时表现两个亲本的性状（如 AB 血型），不是混合。","复等位基因":"一个基因座上存在两个以上等位形式，如 ABO 血型的 I^A、I^B、i。","致死基因":"某些基因型个体不能存活，导致后代比例偏离孟德尔比例（如 2:1 代替 3:1）。","上位作用":"一对基因掩盖另一对非等位基因的表现。分显性上位 12:3:1、隐性上位 9:3:4。","积加作用":"两个显性基因各自给一种表型、同时存在又是第三种，F₂ 为 9:6:1。","抑制作用":"一对显性基因抑制另一对基因的表达，F₂ 为 13:3。","连锁":"位于同一条染色体上的基因倾向于一起遗传。","交换":"减数分裂时同源染色体非姐妹染色单体间互换片段，打破连锁。","重组率":"重组型配子占总配子的比例，反映基因间距离。","图距":"以重组率表示的基因间距离，单位 cM（厘摩）。1 cM = 1% 重组率。","三点测交":"用三对基因的测交同时确定顺序和距离，双交换类型最少的两个基因在中间。","干涉":"一次交换抑制邻近区域再次交换的现象，干涉系数 = 1 − 并发系数。","性连锁":"基因位于性染色体上，遗传与性别相关。X 连锁隐性遗传表现为交叉遗传（外祖父→外孙）。","交叉遗传":"X 连锁隐性基因由母亲传给儿子，表现为男性患者多、隔代遗传。","母系遗传":"由线粒体基因决定的性状，只随母亲传给所有子女，不符合孟德尔比例。","染色体畸变":"染色体结构或数目异常。结构包括缺失、重复、倒位、易位；数目包括整倍体和非整倍体改变。","缺失":"染色体片段丢失。杂合缺失会出现假显性现象（同源染色体上的隐性等位基因表现出来）。","倒位":"染色体片段 180° 反转。杂合倒位联会时形成倒位环，重组会被大大抑制。","易位":"非同源染色体之间交换片段。罗伯逊易位是两条近端着丝粒染色体在着丝粒处融合。","倒位环":"倒位杂合体在减数分裂联会时，为让同源区段配对而拱出的环状结构，是识别倒位的标志。","多倍体":"体细胞含三个及以上染色体组。同源多倍体来自同一物种，异源多倍体来自不同物种杂交加倍（如小麦）。","非整倍体":"染色体数目增减一至几条，如三体（2n+1）、单体（2n−1）、缺体（2n−2）、四体（2n+2）。","三体":"某一号染色体多一条（2n+1）。21 三体即唐氏综合征，患者智力低下、特殊面容。","基因突变":"DNA 序列的可遗传改变。分碱基替换（转换/颠换）和移码（增删非 3 倍数碱基）。","转换":"嘌呤换嘌呤、嘧啶换嘧啶的碱基替换。","颠换":"嘌呤与嘧啶之间的替换。","移码突变":"插入或缺失非 3 整数倍碱基，导致读码框改变，后果通常比替换严重。","同义突变":"碱基改变但编码的氨基酸不变（密码子简并性），表型通常无变化。","错义突变":"碱基改变导致氨基酸替换，可能影响蛋白功能（如镰状细胞贫血）。","无义突变":"密码子变成终止密码子，蛋白提前截短。","诱变剂":"提高突变率的因素。5-溴尿嘧啶引起转换，亚硝酸脱氨，紫外产生嘧啶二聚体。","转座子":"能在基因组内移动位置的 DNA 序列。McClintock 在玉米中发现的 Ac-Ds 系统是经典例子。","转化":"细菌直接摄取环境中的游离 DNA 并整合到基因组。Griffith 肺炎球菌实验、Avery 实验证明 DNA 是遗传物质。","接合":"细菌通过性菌毛直接传递 DNA，供体是 F⁺ 或 Hfr 菌株。","普遍转导":"噬菌体误装宿主任意 DNA 片段并转移给下一个细菌，可转移任何基因。","局限转导":"温和噬菌体从特定整合位点切出时带走邻近基因，只能转移特定几个基因。","F因子":"细菌的致育因子，是能自主复制的质粒。整合到染色体上后成为 Hfr 菌株，会高频转移染色体基因。","影印培养":"Lederberg 设计的实验：把平板上的菌落原样印到含药平板上，证明抗性突变是自发的，不是药物诱导的。","质粒":"染色体外能自主复制的环状 DNA，可携带抗性基因、F 因子等。","限制酶":"识别特定序列并切割 DNA 的核酸内切酶，是基因工程的「剪刀」。常用酶产生黏性末端。","PCR":"聚合酶链式反应，用变性-退火-延伸三步循环扩增 DNA。需要模板、引物、dNTP、Taq 酶。","Sanger测序":"双脱氧链终止法。ddNTP 掺入后不能继续延伸，得到长短不一的片段，电泳读序。","Southern印迹":"检测 DNA：DNA-Southern。RNA 用 Northern，蛋白用 Western。S/N/W 与 D/R/P 正好反过来。","Hardy-Weinberg平衡":"大群体、随机交配、无突变无选择无迁移时，基因频率和基因型频率代代不变。p²+2pq+q²=1。","遗传率":"遗传方差占总方差的比例。广义含全部遗传方差，狭义只含加性方差，育种上只看狭义。","近交系数":"个体两个等位基因来自同一祖先同一基因的概率，衡量近交程度。","杂种优势":"杂交后代在生长势、抗性等方面超过双亲的现象，F₂ 开始衰退。","数量性状":"受多基因控制、表现连续变异的性状（身高、产量），受环境影响大。","遗传漂变":"小群体中基因频率的随机波动，可能导致基因丢失或固定。","细胞质遗传":"由细胞质基因（线粒体、叶绿体）决定的遗传，特点是母系遗传、不遵循孟德尔比例。","基因组印记":"同一基因来自父方或母方时表达情况不同，与甲基化修饰有关。","定语从句":"修饰名词的从句，由关系代词（which/that/who/whose）或关系副词（when/where/why）引导，紧跟在先行词后。","同位语从句":"解释说明前面抽象名词（fact/news/idea/belief）具体内容的从句，用 that 引导且 that 不作成分。","非谓语动词":"不定式（to do）、动名词（doing）、分词（doing/done）不能在句中单独作谓语，但可作主语、宾语、定语、状语。","倒装句":"为强调或语法需要把谓语（或助动词）提到主语前。Only + 状语置于句首要部分倒装。","虚拟语气":"表示与事实相反的假设。与过去相反用 had done，与现在相反用 did/were，与将来相反用 were to do。"};
var TERM_KEYS = Object.keys(TERMS).sort(function(a,b){ return b.length - a.length; });
var TERM_RE = new RegExp('(' + TERM_KEYS.map(function(k){
  return k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}).join('|') + ')', 'g');

/* 把文本里的术语包成可点标签（逐段转义，避免污染 HTML） */
function termify(txt){
  if(txt===null || txt===undefined) return '';
  var s = String(txt), out = '', last = 0, m;
  TERM_RE.lastIndex = 0;
  while((m = TERM_RE.exec(s)) !== null){
    out += esc(s.slice(last, m.index));
    var w = m[1];
    out += '<span class="tm" onclick="event.stopPropagation();tmOpen(\'' + w + '\')">' + esc(w) + '</span>';
    last = m.index + w.length;
  }
  out += esc(s.slice(last));
  return out;
}
function tmOpen(w){
  var d = TERMS[w]; if(!d) return;
  document.getElementById('tmWord').textContent = w;
  document.getElementById('tmDef').innerHTML = d.replace(/考点[:：]/g, '<em>考点：</em>');
  // 关联知识点
  var rel = [];
  var w2 = (w.length >= 3) ? w.slice(0, 2) : w;
  knowAll().forEach(function(k){
    if(k.n && k.n.indexOf(w) >= 0){ rel.push(k); return; }
    if(k.core && k.core.indexOf(w) >= 0){ rel.push(k); return; }
    var ks = k.keys || [];
    for(var i = 0; i < ks.length; i++){
      if(ks[i].indexOf(w) >= 0 || (w2 !== w && ks[i].indexOf(w2) >= 0)){ rel.push(k); return; }
    }
  });
  var rh = '';
  if(rel.length){
    rh = '相关知识点：';
    rel.slice(0,3).forEach(function(k){
      rh += '<a href="javascript:;" onclick="tmClose();openKD(\'' + k.id + '\')">' + esc(k.n) + '</a>';
    });
  }else{
    rh = '共 ' + TERM_KEYS.length + ' 条术语，设置页可查全表';
  }
  document.getElementById('tmRel').innerHTML = rh;
  document.getElementById('tmMask').classList.add('on');
}
function tmClose(){ document.getElementById('tmMask').classList.remove('on'); }

function renderTerm(){
  var q = (document.getElementById('termSearch').value || '').trim();
  var keys = TERM_KEYS.slice();
  if(q) keys = keys.filter(function(k){ return k.indexOf(q) >= 0 || TERMS[k].indexOf(q) >= 0; });
  document.getElementById('termCount').textContent = '共 ' + TERM_KEYS.length + ' 条 · 题干里的蓝字都能点';
  var h = '';
  if(!keys.length){ h = '<div class="weak-none">没找到，换个词试试</div>'; }
  keys.forEach(function(k){
    var d = TERMS[k];
    h += '<div class="term-row" onclick="tmOpen(\'' + k + '\')"><b>' + esc(k) + '</b><span>' + esc(d) + '</span></div>';
  });
  document.getElementById('termBody').innerHTML = h;
}

/* ---- 蒙对判定：答对但不确定，不算掌握 ---- */
function applyGuess(id){
  var prev = cst(id);
  setCard(id, {
    st: 0,                        // 不算掌握
    hit: prev.hit || 0,           // 连续答对计数不涨
    g: (prev.g || 0) + 1,         // 蒙的次数
    lv: 0,                        // 打回最底层
    due: today(),                 // 今天就重考
    fav: prev.fav || 0
  });
}
function guessList(){
  return HUB.cards.filter(function(c){ var s = cst(c.id); return (s.g || 0) > 0 && !(s.st > 0); });
}
function startGuess(){
  var q = shuffle(guessList());
  if(!q.length){ toast('没有蒙对的题，干净 👍'); return; }
  startSession(q, '蒙对未掌握', 'guess');
}
function askGuess(c, prevSt){
  showExplain(c);
  var tip = document.createElement('div');
  tip.className = 'guess-tip';
  tip.innerHTML = '<b>这题对了 —— 但你是真会，还是蒙的？</b>' +
    '<span>选「蒙的」不算掌握，今天会再考你一次；这道题只有在真会时才计入进度。</span>';
  var fc = document.getElementById('flashcard');
  fc.insertBefore(tip, fc.firstChild);
  document.getElementById('actRow').innerHTML =
    '<button class="act-btn unknown" onclick="answerAs(\'guess\')">🎲 蒙的</button>' +
    '<button class="act-btn known" onclick="answerAs(\'know\')">✅ 真会</button>';
}
function answerAs(kind){
  var c = Q[qi]; if(!c) return;
  var st = cst(c.id);
  if(kind === 'know') applyScore(c.id, true);
  else applyGuess(c.id);
  if(todayCounted){
    if(st.st === 0 && !(st.g > 0)){ todayCounted.new++; S.todayNew = (S.todayNew || 0) + 1; }
    else { todayCounted.rev++; S.todayRev = (S.todayRev || 0) + 1; }
    save(); checkDailyDone();
  }
  if(kind === 'guess') toast('记下了：这题算蒙的，今天会再考你');
  qi++; renderCard();
}

/* ---- 访客模式 ---- */
function copyGuestLink(){
  var u = location.origin + location.pathname + '?guest=1';
  var ta = document.createElement('textarea');
  ta.value = u; document.body.appendChild(ta); ta.select();
  var ok = false;
  try{ ok = document.execCommand('copy'); }catch(e){}
  document.body.removeChild(ta);
  if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(u);
  toast('访客链接已复制：对方打开看不到云同步');
}
function applyGuestMode(){
  if(!GUEST) return;
  var ac = document.getElementById('accCard'); if(ac) ac.style.display = 'none';
  var gc = document.getElementById('ghCard'); if(gc) gc.style.display = 'none';
  var sc = document.getElementById('storeCard'); if(sc) sc.style.display = 'none';
  var t = document.querySelector('.app-title, #appTitle, header h1');
  if(t && !t.querySelector('.guest-badge')){
    t.insertAdjacentHTML('beforeend', '<span class="guest-badge">访客</span>');
  }
}

/* ==================== v7 云同步（GitHub 私有仓库） ==================== */
const GH_CFG_KEY='xzt_gh_cfg';
const GH={busy:false, timer:null, dirty:false, suppress:false, lastErr:'', retry:0};

function ghCfg(){
  try{ return JSON.parse(localStorage.getItem(GH_CFG_KEY)||'{}'); }catch(e){ return {}; }
}
function ghSetCfg(c){ localStorage.setItem(GH_CFG_KEY, JSON.stringify(c)); }
function ghTime(ts){
  const d=new Date(ts);
  return (d.getMonth()+1)+'/'+d.getDate()+' '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');
}
function ghStatus(msg, cls){
  const el=document.getElementById('ghStatus'); if(!el) return;
  el.textContent=msg; el.className='gh-status'+(cls?(' '+cls):'');
}
function ghSize(){
  try{ return Math.max(1,Math.round(JSON.stringify(ghPack()).length/1024))+' KB'; }catch(e){ return ''; }
}
function b64enc(str){
  const bytes=new TextEncoder().encode(str);
  let bin=''; const CH=0x8000;
  for(let i=0;i<bytes.length;i+=CH) bin+=String.fromCharCode.apply(null, bytes.subarray(i,i+CH));
  return btoa(bin);
}
/* 单次请求：带超时 + 空响应体容错 + 非 JSON 拦截 */
async function ghOnce(path, opts, token){
  const headers=Object.assign({
    'Authorization':'token '+token,
    'Accept':'application/vnd.github+json',
    'X-GitHub-Api-Version':'2022-11-28'
  }, (opts&&opts.headers)||{});
  const url='https://api.github.com'+path;
  const init=Object.assign({}, opts, {headers:headers, cache:'no-store'});
  let timer=null, ctrl=null;
  if(typeof AbortController==='function'){
    ctrl=new AbortController();
    init.signal=ctrl.signal;
    const big = opts && opts.body ? String(opts.body).length : 0;
    const to = big > 200000 ? 90000 : 20000;
    timer=setTimeout(function(){ try{ ctrl.abort(); }catch(e){} }, to);
  }
  let r=null;
  try{
    r=await fetch(url, init);
  }catch(err){
    if(timer) clearTimeout(timer);
    const e=new Error('网络被中断');
    e.net=true; e.raw=(err&&err.name==='AbortError')?'超时':'连接失败';
    throw e;
  }
  if(timer) clearTimeout(timer);
  const txt=await r.text().catch(function(){ return ''; });
  let body=null;
  if(txt){
    try{ body=JSON.parse(txt); }
    catch(e){
      // 拿回来的不是 JSON：多半被运营商 / 代理劫持或截断了
      const ie=new Error('返回的不是正常数据');
      ie.bad=true; ie.status=r.status; ie.raw=txt.slice(0,60);
      throw ie;
    }
  }
  if(!r.ok){
    const e2=new Error((body&&body.message)||('HTTP '+r.status));
    e2.status=r.status; throw e2;
  }
  if(body===null){
    // 200 但空包 —— 典型断流，当作网络问题，交给上层重试
    const ne=new Error('网络被中断');
    ne.net=true; ne.raw='空响应'; throw ne;
  }
  return body;
}
/* 三次重试：0 / 900ms / 2000ms，只重试网络类错误，4xx 一律不重试 */
async function ghReq(path, opts, tokenOverride){
  const c=ghCfg();
  const token=tokenOverride||c.token;
  if(!token) throw new Error('还没填令牌');
  opts=opts||{};
  const waits=[0,900,2000];
  let last=null;
  for(let i=0;i<waits.length;i++){
    if(waits[i]){
      GH.retry=i;
      ghStatus('网络不稳，重试第 '+i+' 次…');
      await new Promise(function(res){ setTimeout(res, waits[i]); });
    }
    try{
      const out=await ghOnce(path, opts, token);
      GH.retry=0;
      return out;
    }catch(e){
      last=e;
      // 401/403/404/422 这类是配置问题，重试没意义
      if(e.status && !e.bad) throw e;
      if(e.status===404) throw e;
    }
  }
  GH.retry=0;
  throw last;
}
function ghErrHint(e){
  if(e.status===401) return '（令牌无效或过期，重新生成一个再填进来）';
  if(e.status===403) return '（权限不足或触发限流，等几分钟再试）';
  if(e.status===404) return '（仓库不存在或没权限）';
  if(e.status===422) return '（请求被拒绝，检查仓库名）';
  if(e.net) return '（连不上 GitHub，换个网络再试；实在不行用下面的「导出文件」互传）';
  if(e.bad) return '（网络被劫持或截断，换个网络再试）';
  if(String(e.message||'').indexOf('Failed to fetch')>=0) return '（网络不通，试试换网络或用文件互传）';
  return '';
}
function ghPack(){
  return {
    app:'shuati', v:7, at:Date.now(),
    cards:S.cards||{}, daily:S.daily||{}, streak:S.streak||0,
    lastDate:S.lastDate||null, lastCheckin:S.lastCheckin||null,
    goal:S.goal||{new:10,rev:20}, todayNew:S.todayNew||0, todayRev:S.todayRev||0,
    hw:S.hw||{}, hwOpt:S.hwOpt||{onlyPen:0},
    ink:S.ink||{}, read:S.read||{}, rpos:S.rpos||{}
  };
}
function ghMerge(remote){
  if(!remote||typeof remote!=='object') return 0;
  let changed=0;
  GH.suppress=true;
  const rc=remote.cards||{};
  for(const id in rc){
    const b=rc[id]; if(!b) continue;
    const a=S.cards[id];
    if(!a){ S.cards[id]=b; changed++; continue; }
    const ta=a.t||0, tb=b.t||0;
    if(tb>ta){ S.cards[id]=b; changed++; }
    else if(ta===0 && tb===0){
      const st=Math.max(a.st||0, b.st||0);
      const hit=Math.max(a.hit||0, b.hit||0);
      const lv=Math.max(a.lv||0, b.lv||0);
      if(st!==(a.st||0)||hit!==(a.hit||0)||lv!==(a.lv||0)){
        S.cards[id]=Object.assign({}, a, {st:st,hit:hit,lv:lv}); changed++;
      }
    }
  }
  const rd=remote.daily||{};
  for(const k in rd){
    if(!S.daily[k] || (rd[k]==='done' && S.daily[k]!=='done')){ S.daily[k]=rd[k]; changed++; }
  }
  const ri=remote.ink||{};
  if(!S.ink) S.ink={};
  for(const ik in ri){
    const b=ri[ik];
    if(!b || !b.strokes || !b.strokes.length) continue;
    const a=S.ink[ik];
    if(!a || (b.at||0) > (a.at||0)){ S.ink[ik]=b; changed++; }
  }
  const st2=Math.max(S.streak||0, remote.streak||0);
  if(st2>(S.streak||0)){ S.streak=st2; changed++; }
  if(!S.hw) S.hw={};
  if(!S.hwThumb) S.hwThumb={};
  const rh=remote.hw||{};
  for(const id in rh){
    const b=rh[id]; if(!b) continue;
    const a=S.hw[id];
    if(!a){ S.hw[id]=b; changed++; }
    else if((b.at||0)>(a.at||0)){ S.hw[id]=b; changed++; }
  }
  /* v21：阅读进度也合并（只在新，不覆盖本地更新的） */
  let readCh=0;
  const rr=remote.read||{};
  for(const k in rr){
    if(!S.read) S.read={};
    if(!S.read[k] || rr[k]>S.read[k]){ S.read[k]=rr[k]; readCh++; }
  }
  const rp=remote.rpos||{};
  for(const k in rp){
    if(!S.rpos) S.rpos={};
    if(typeof rp[k]==='number' && S.rpos[k]!==rp[k]){ S.rpos[k]=rp[k]; }
  }
  GH.suppress=false;
  if(changed || readCh){
    save();
    try{ hwRebuildThumbs(); }catch(e){}
  }
  return changed;
}
async function ghSync(silent, mode){
  mode = mode || 'both';           // both | pull | push
  const c=ghCfg();
  if(!c.token || !c.repo){ if(!silent) toast('先去设置页填令牌'); return; }
  if(GH.busy) return;
  GH.busy=true; GH.dirty=false;
  if(!silent) ghStatus(mode==='pull'?'正在下载…':(mode==='push'?'正在上传…':'同步中…'));
  try{
    const path='/repos/'+c.repo+'/contents/shuati-sync.json';
    let sha=null, remote=null;
    if(mode!=='push'){
      try{
        const f=await ghReq(path+'?t='+Date.now());
        if(!f||!f.sha) throw Object.assign(new Error('云端返回空'), {net:true});
        sha=f.sha;
        remote=ghDecode(f.content||'');   // 云端文件读不出来就当没同步过，别整个流程挂掉
      }catch(e){ if(e.status!==404) throw e; }
    }
    const changed = remote ? ghMerge(remote) : 0;
    if(mode!=='pull'){
      const payload=ghPack();
      const body={message:'sync '+(new Date().toISOString()), content:ghEncode(payload)};
      if(sha) body.sha=sha;
      await ghReq(path, {method:'PUT', body:JSON.stringify(body)});
    }
    c.lastAt=Date.now(); ghSetCfg(c);
    const tip = mode==='pull' ? '✅ 已下载云端 · ' : '✅ 已同步 · ';
    ghStatus(tip+ghTime(c.lastAt)+' · '+(changed?('合并 '+changed+' 条 · '):'')+ghSize(), 'ok');
    if(!silent) toast(mode==='pull'?'已从云端下载 ✅':'同步完成 ✅');
  }catch(e){
    GH.lastErr=e.message||'unknown';
    const hint=ghErrHint(e);
    ghStatus('❌ 同步失败：'+(e.message||'')+hint, 'err');
    if(!silent && hint) toast('同步失败：'+(e.message||'')+hint);
    else if(!silent) toast('同步失败：'+(e.message||''));
    if((e.net||e.bad) && !silent){
      // 网络类失败：把「导出文件」这条后路指出来
      const el=document.getElementById('fileStatus');
      if(el) el.textContent='网络连不上 GitHub 时，点上面「导出文件」，发到另一台设备「选择文件导入」也能对齐。';
    }
  }finally{ GH.busy=false; }
}
async function ghConnect(){
  const repoEl=document.getElementById('ghRepo');
  const tokEl=document.getElementById('ghToken');
  let repo=(repoEl.value||'').trim().replace(/^https?:\/\/github\.com\//,'').replace(/\.git$/,'').replace(/\/$/,'');
  const token=(tokEl.value||'').trim();
  if(!token){ toast('先填令牌'); return; }
  ghStatus('检查令牌…');
  try{
    const u=await ghReq('/user', {}, token);
    if(!repo){ repo=u.login+'/shuati-data'; repoEl.value=repo; }
    const c=ghCfg();
    c.token=token; c.repo=repo;
    ghSetCfg(c);
    ghStatus('检查仓库 '+repo+' …');
    try{
      await ghReq('/repos/'+repo, {}, token);
    }catch(e){
      if(e.status===404){
        const name=repo.indexOf('/')>=0?repo.split('/')[1]:repo;
        ghStatus('仓库不存在，正在创建 '+name+' …');
        await ghReq('/user/repos', {method:'POST', body:JSON.stringify({
          name:name, private:true, auto_init:true,
          description:'刷题总台同步数据（私有，勿公开）'
        })}, token);
      }else throw e;
    }
    await ghSync();
    ghTokHint();
  }catch(e){
    const hint=ghErrHint(e);
    ghStatus('❌ 连接失败：'+(e.message||'')+hint, 'err');
    if(e.net||e.bad){
      const el=document.getElementById('fileStatus');
      if(el) el.textContent='连不上 GitHub 也能用：点上面「导出文件」发到另一台设备「选择文件导入」，效果一样。';
    }
  }
}
function ghPush(){
  if(!ghCfg().token){ toast('先去设置页填令牌'); return; }
  if(!confirm('会把本机数据覆盖到云端（云端更新的记录会被覆盖）。确定？')) return;
  ghSync(false,'push');
}
function ghPull(){
  if(!ghCfg().token){ toast('先去设置页填令牌'); return; }
  ghSync(false,'pull');
}
function ghDisconnect(){
  const c=ghCfg();
  if(!c.token){ toast('本来就没连'); return; }
  if(!confirm('断开后本机不再自动同步（进度和笔迹不会删）。确定？')) return;
  delete c.token; delete c.auto; ghSetCfg(c);
  ghFillSet(); toast('已断开');
}
function ghSetAuto(v){
  const c=ghCfg(); c.auto=v?1:0; ghSetCfg(c);
  if(v && c.token){ ghSync(true); toast('已开启自动同步'); }
  else if(v){ toast('先点「连接并同步」'); }
}
function ghTouch(){
  if(GH.suppress) return;
  if(typeof CLOUD!=='undefined' && CLOUD){
    if(CLOUD.suppress) return;
    if(CLOUD.on && CLOUD.auto){ cloudTouch(); return; }   /* 登录了就只走账号同步，不再碰 GitHub */
  }
  const c=ghCfg();
  if(!c.auto || !c.token) return;
  GH.dirty=true;
  if(GH.timer) return;
  GH.timer=setTimeout(function(){
    GH.timer=null;
    if(GH.dirty) ghSync(true);
  }, 60000);
}
function ghFillSet(){
  const c=ghCfg();
  const r=document.getElementById('ghRepo'); if(r) r.value=c.repo||'';
  const t=document.getElementById('ghToken'); if(t) t.value=c.token||'';
  const a=document.getElementById('ghAuto'); if(a) a.checked=!!c.auto;
  ghTokHint();
  if(c.lastAt) ghStatus('上次同步 '+ghTime(c.lastAt)+' · 当前数据 '+ghSize(), 'ok');
  else if(c.token) ghStatus('令牌已填，点「连接并同步」');
  else ghStatus('未连接');
}
function ghTokHint(){
  const el=document.getElementById('ghTokHint'); if(!el) return;
  const c=ghCfg();
  el.innerHTML = c.token
    ? '这台设备已存令牌（<b>'+(c.token.length>10?c.token.slice(0,7)+'…'+c.token.slice(-4):'已填')+'</b>）。换设备时点右边 👁 复制，粘到那台去。'
    : '还没有令牌？GitHub → 头像 → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token，勾上 <b>repo</b>，生成后复制那串 ghp_… 粘这里。';
}
function ghToggleToken(){
  const t=document.getElementById('ghToken'); if(!t) return;
  const el=document.getElementById('ghTokHint');
  const shown = t.type==='text';
  t.type = shown ? 'password' : 'text';
  document.getElementById('ghEye').textContent = shown ? '👁' : '🙈';
  const v=(t.value||'').trim();
  if(!v){ if(el) el.innerHTML='框里还没有令牌，先粘一个进来。'; return; }
  // 复制一份，方便发到另一台设备
  let done=false;
  try{
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(v).then(function(){}, function(){});
      done=true;
    }
  }catch(e){}
  if(done) toast('令牌已复制，发到另一台设备粘贴');
}

/* ---- 文件互传 ---- */
/* ---- v14 文本互传（微信里没有下载权限，走剪贴板） ---- */
function b64encBytes(bytes){
  let bin=''; const CH=0x8000;
  for(let i=0;i<bytes.length;i+=CH) bin+=String.fromCharCode.apply(null, bytes.subarray(i,i+CH));
  return btoa(bin);
}
function b64decBytes(b64){
  const bin=atob(String(b64||'').replace(/\s/g,''));
  const out=new Uint8Array(bin.length);
  for(let i=0;i<bin.length;i++) out[i]=bin.charCodeAt(i);
  return out;
}

/* 云端文件格式：gzip 后加 3 字节头 GZ1，再 base64。老版本明文 JSON 也能读 */
function ghEncode(obj){
  const json=JSON.stringify(obj);
  let gz=null;
  try{ gz=window.pako ? window.pako.gzip(new TextEncoder().encode(json)) : null; }catch(e){}
  if(!gz) return b64enc(json);            // 极端情况退回明文
  const out=new Uint8Array(3+gz.length);
  out[0]=0x47; out[1]=0x5a; out[2]=0x31;  // 'GZ1'
  out.set(gz,3);
  return b64encBytes(out);
}
function ghDecode(b64){
  let bytes;
  try{ bytes=b64decBytes(b64); }catch(e){ return null; }
  if(bytes.length>10 && bytes[0]===0x47 && bytes[1]===0x5a && bytes[2]===0x31){
    let txt=null;
    try{ txt=new TextDecoder().decode(window.pako.ungzip(bytes.subarray(3))); }catch(e){ return null; }
    try{ return JSON.parse(txt); }catch(e){ return null; }
  }
  try{ return JSON.parse(new TextDecoder().decode(bytes)); }catch(e){ return null; }
}
/* 打包成文本：支持 gzip 就压（前缀 GZ:），否则原文 base64（前缀 JS:） */
/* 兼容老内核：没有 CompressionStream 时（微信 X5）临时加载自带 pako */
function ensurePako(){
  if(window.pako) return Promise.resolve(true);
  if(ensurePako.p) return ensurePako.p;
  ensurePako.p = new Promise(function(res){
    var s=document.createElement('script');
    s.src='./pako.min.js';
    s.onload=function(){ res(!!window.pako); };
    s.onerror=function(){ res(false); };
    document.head.appendChild(s);
    setTimeout(function(){ res(!!window.pako); }, 4000);
  });
  return ensurePako.p;
}
/* 日期压成天数（2020-01-01 起），省字节 */
const DUE0=Date.UTC(2020,0,1);
function dueNum(s){ const t=Date.parse((s||'')+'T00:00:00Z'); return isNaN(t)?0:Math.round((t-DUE0)/86400000); }
function dueStr(n){ return n ? new Date(DUE0+n*86400000).toISOString().slice(0,10) : ''; }
/* 打包成文本：优先浏览器 gzip（GZ:），其次自带 pako（PK:），最后原文 base64（JS:）
   light=1 只带答题记录（卡片压成数组，体积小一个数量级） */
async function packText(light){
  const d=ghPack();
  if(light){
    const cc={};
    for(const id in (S.cards||{})){
      const r=S.cards[id]; if(!r) continue;
      cc[id]=[r.st||0, r.hit||0, r.lv||0, dueNum(r.due), r.fav?1:0, r.g||0, r.w||0];
    }
    d.cards=cc; d.cf=1; d.packAt=Date.now(); d.light=1;
    delete d.hw; delete d.ink; delete d.hwOpt;
  }
  const json=JSON.stringify(d);
  const raw=new TextEncoder().encode(json);
  if(typeof CompressionStream==='function'){
    try{
      const cs=new CompressionStream('gzip');
      const w=cs.writable.getWriter();
      w.write(raw); w.close();
      const buf=await new Response(cs.readable).arrayBuffer();
      return 'GZ:'+b64encBytes(new Uint8Array(buf));
    }catch(e){}
  }
  try{
    if(await ensurePako()) return 'PK:'+b64encBytes(window.pako.gzip(raw));
  }catch(e){}
  return 'JS:'+b64encBytes(raw);
}
/* 把精简格式的卡片数组还原成正常对象 */
function pcExpand(d){
  if(!d || d.cf!==1) return d;
  const cc=d.cards||{}, out={}, at=d.packAt||Date.now();
  for(const id in cc){
    const a=cc[id];
    if(!Array.isArray(a)){ out[id]=a; continue; }
    out[id]={st:a[0]||0, hit:a[1]||0, lv:a[2]||0, due:dueStr(a[3]), fav:a[4]?1:0, g:a[5]||0, w:a[6]||0, t:at};
  }
  d.cards=out; delete d.cf; delete d.packAt;
  return d;
}
/* 解包：兼容 GZ: / JS: / 纯 JSON */
/* 解 gzip：浏览器原生优先，没有就用自带 pako */
async function pcGunzip(bytes){
  if(typeof DecompressionStream==='function'){
    try{
      const ds=new DecompressionStream('gzip');
      const w=ds.writable.getWriter();
      w.write(bytes); w.close();
      return await new Response(ds.readable).text();
    }catch(e){ throw new Error('这段数据不完整（中间缺了一截），重新复制一次'); }
  }
  if(!(await ensurePako())) throw new Error('这台设备解不了压，换个设备导入');
  try{ return new TextDecoder().decode(window.pako.ungzip(bytes)); }
  catch(e){ throw new Error('这段数据不完整（中间缺了一截），重新复制一次'); }
}
async function unpackText(s){
  s=String(s||'').trim();
  if(!s) throw new Error('内容为空');
  const mode=s.slice(0,3), body=s.slice(3);
  if(mode==='GZ:' || mode==='PK:'){
    let bytes;
    try{ bytes=pcB64(body); }
    catch(e){ throw new Error('这段数据不完整（开头或结尾被截掉了），重新复制一次'); }
    let txt=await pcGunzip(bytes);
    let obj;
    try{ obj=JSON.parse(txt); }
    catch(e){ throw new Error('这段数据不完整（解出来是半截），重新复制一次'); }
    return pcExpand(obj);
  }
  if(mode==='JS:'){
    let bytes;
    try{ bytes=pcB64(body); }
    catch(e){ throw new Error('这段数据不完整（开头或结尾被截掉了），重新复制一次'); }
    try{ return pcExpand(JSON.parse(new TextDecoder().decode(bytes))); }
    catch(e){ throw new Error('这段数据不完整（中间缺了一截），重新复制一次'); }
  }
  try{ return pcExpand(JSON.parse(s)); }   // 也吃老的 .json 文件内容
  catch(e){}
  // 兜底：没前缀但内容像 base64，按 gzip 魔数猜一下（微信把开头字母吞掉时救命用）
  try{
    const bytes=pcB64(s);
    if(bytes[0]===0x1f && bytes[1]===0x8b){
      const txt=await pcGunzip(bytes);
      return pcExpand(JSON.parse(txt));
    }
  }catch(e){}
  throw new Error('这不是刷题数据（应该是 GZ: / PK: / JS: 开头的一段，或者 .json 文件内容）');
}
/* 清理 + 解码 base64：去掉微信复制的空格/换行/省略号，补齐 padding */
function pcB64(str){
  const clean=String(str||'').replace(/[^A-Za-z0-9+/=]/g,'').replace(/=+$/,'');
  if(!clean) throw new Error('empty');
  const pad=(4 - clean.length % 4) % 4;
  return b64decBytes(clean + '='.repeat(pad));
}
var PC={mode:'out', parts:[], idx:0, got:{}, total:0, light:1};
const PC_CHUNK=2600;   // 每段字符数：微信里这个长度复制最稳
async function exportClip(light){
  PC.mode='out'; PC.idx=0;
  PC.light = (light===0) ? 0 : 1;
  const mask=document.getElementById('pcMask');
  document.getElementById('pcTitle').textContent='📋 复制数据';
  document.getElementById('pcOk').style.display='none';
  document.getElementById('pcSel').style.display='';
  const pm=document.getElementById('pcMode'); if(pm) pm.classList.add('on');
  const c1=document.getElementById('pcChip1'), c2=document.getElementById('pcChip2');
  if(c1) c1.className='pc-chip'+(PC.light?' on':'');
  if(c2) c2.className='pc-chip'+(PC.light?'':' on');
  document.getElementById('pcNote').textContent='正在打包…';
  mask.classList.add('on');
  let txt='';
  try{ txt=await packText(PC.light); }
  catch(e){ document.getElementById('pcNote').textContent='打包失败：'+(e.message||''); return; }
  // 切段：数据短就直接一整段，长了才分
  if(txt.length <= PC_CHUNK){
    PC.parts=[txt];
  }else{
    const n=Math.ceil(txt.length/PC_CHUNK);
    PC.parts=[];
    for(let i=0;i<n;i++) PC.parts.push('P'+(i+1)+'/'+n+'|'+txt.slice(i*PC_CHUNK,(i+1)*PC_CHUNK));
  }
  PC.total=PC.parts.length;
  await pcShowPart(0);
}
async function pcShowPart(i){
  PC.idx=i;
  const area=document.getElementById('pcArea');
  const note=document.getElementById('pcNote');
  const part=PC.parts[i];
  area.value=part; area.readOnly=true;
  const multi=PC.total>1;
  const why = PC.light
    ? '（只带答题记录，不含手写笔迹和批注）'
    : '（含手写笔迹和批注）';
  document.getElementById('pcTip').textContent = multi
    ? ('数据'+why+'，分成了 '+PC.total+' 段。段数多就换上面「只要答题记录」，或者干脆用云同步。一段一段来：复制这一段，点「下一段 →」，直到最后一段。')
    : ('下面就是你的全部进度'+why+'。全选 → 复制 → 到另一台设备打开本页点「粘贴导入」。');
  let copied=false;
  try{ await navigator.clipboard.writeText(part); copied=true; }catch(e){}
  pcSelectAll();
  // 按钮：多段时右侧变成「下一段」
  const sel=document.getElementById('pcSel');
  if(multi && i<PC.total-1){
    sel.textContent='下一段 →';
    sel.onclick=function(){ pcShowPart(PC.idx+1); };
  }else if(multi){
    sel.textContent='已到末段';
    sel.onclick=function(){ toast('全部 '+PC.total+' 段都看过了'); };
  }else{
    sel.textContent='全选';
    sel.onclick=pcSelectAll;
  }
  const kb=Math.max(1,Math.round(part.length/1024));
  const head = multi ? ('第 '+(i+1)+' / '+PC.total+' 段（约 '+kb+' KB）。') : ('约 '+kb+' KB。');
  let msg = head + (copied
    ? '✅ 已复制，直接去粘贴。没粘上就长按上面的框手动全选复制。'
    : '内容已全选，长按上面的框 → 复制。');
  if(PC.total > 15){
    msg = '⚠️ 段数太多了（'+PC.total+' 段），别硬复制。'
        + (PC.light ? '你这台设备的浏览器不支持压缩，只能原文传。建议用「☁️ 云同步」，一次搞定。'
                    : '点上面「只要答题记录」会小很多，实在要带笔迹就用云同步。');
  }
  note.textContent = msg;
  if(copied) toast(multi ? ('已复制第 '+(i+1)+' 段') : '已复制 ✅');
}
function importClip(){
  PC.mode='in'; PC.got={}; PC.total=0;
  const mask=document.getElementById('pcMask');
  document.getElementById('pcTitle').textContent='📥 粘贴导入';
  const pm=document.getElementById('pcMode'); if(pm) pm.classList.remove('on');
  document.getElementById('pcTip').textContent=
    '会自动去读剪贴板；读不到就长按下面框手动粘贴。会合并不覆盖——两边各自刷过的记录都会保留。';
  document.getElementById('pcOk').style.display='';
  const sel=document.getElementById('pcSel');
  sel.style.display=''; sel.textContent='📋 读剪贴板'; sel.onclick=pcPasteClip;
  document.getElementById('pcNote').textContent='正在读剪贴板…';
  const area=document.getElementById('pcArea');
  area.value=''; area.readOnly=false;
  mask.classList.add('on');
  setTimeout(function(){ try{ area.focus(); }catch(e){} }, 260);
  pcPasteClip(true);
}
/* 读系统剪贴板：同一台设备的微信和浏览器共用剪贴板，这样就不用发消息了 */
function pcPasteClip(auto){
  const area=document.getElementById('pcArea');
  const note=document.getElementById('pcNote');
  const ok=function(t){
    t=String(t||'').trim();
    if(!t){ if(!auto) note.textContent='剪贴板是空的，先在另一边点「复制数据」。'; return; }
    if(area.value.trim()===t) return;
    area.value=t;
    note.textContent='✅ 已读到剪贴板内容（'+t.length+' 字符），点「导入」。';
  };
  try{
    if(navigator.clipboard && navigator.clipboard.readText){
      navigator.clipboard.readText().then(ok, function(){
        if(auto) note.textContent='读不到剪贴板（系统拦了），长按下面的框手动粘贴。';
        else note.textContent='读不到剪贴板，长按下面的框手动粘贴。';
      });
      return;
    }
  }catch(e){}
  if(auto) note.textContent='这个浏览器不支持读剪贴板，长按下面的框手动粘贴。';
  else note.textContent='这个浏览器不支持读剪贴板，长按下面的框手动粘贴。';
}
function pcSelectAll(){
  const area=document.getElementById('pcArea');
  try{ area.focus(); area.setSelectionRange(0, area.value.length); }catch(e){}
  try{ area.select(); }catch(e){}
}
/* 解析一段：返回 {i,n,body} 或 {whole:文本} */
function pcParsePart(txt){
  const m=/^\s*P(\d+)\s*\/\s*(\d+)\s*\|/.exec(txt);
  if(m){
    const i=parseInt(m[1],10), n=parseInt(m[2],10);
    const body=txt.slice(m[0].length);
    return {i:i, n:n, body:body};
  }
  return {whole:txt};
}
async function pcConfirm(){
  if(PC.mode!=='in') return;
  const area=document.getElementById('pcArea');
  const note=document.getElementById('pcNote');
  const raw=area.value;
  if(!String(raw||'').trim()){ note.textContent='框里是空的，先把文本粘进来。'; return; }
  const p=pcParsePart(raw);
  // 分段：先攒起来
  if(p.i){
    if(PC.total && p.n!==PC.total){ PC.got={}; }   // 换了另一批，重来
    PC.total=p.n;
    PC.got[p.i]=p.body.trim();
    const have=Object.keys(PC.got).length;
    if(have<PC.total){
      const miss=[];
      for(let k=1;k<=PC.total;k++) if(!PC.got[k]) miss.push(k);
      note.textContent='✅ 已收到第 '+p.i+' 段（'+have+'/'+PC.total+'）。还差第 '+miss.join('、')+' 段，继续粘下一段。';
      area.value='';
      setTimeout(function(){ try{ area.focus(); }catch(e){} }, 120);
      return;
    }
    // 集齐，拼起来解
    note.textContent='已收齐 '+PC.total+' 段，正在合并…';
    let full='';
    for(let k=1;k<=PC.total;k++) full+=PC.got[k];
    try{
      const data=await unpackText(full);
      return pcApply(data);
    }catch(e){
      PC.got={}; PC.total=0;
      note.textContent='❌ 拼起来解不开：'+(e.message||'')+'。可能哪一段没复制全，重新来一遍。';
      return;
    }
  }
  // 一次粘完整段
  note.textContent='正在导入…';
  try{
    const data=await unpackText(p.whole);
    return pcApply(data);
  }catch(e){
    note.textContent='❌ 导入失败：'+(e.message||'内容格式不对');
  }
}
function pcApply(data){
  if(!data || typeof data!=='object' || (!data.cards && !data.daily && !data.hw && !data.ink)){
    document.getElementById('pcNote').textContent='❌ 这段内容里没有可识别的进度。';
    return;
  }
  const n=ghMerge(data);
  save();
  const noArt = data.light ? '（手写笔迹和批注没带过来）' : '';
  PC.got={}; PC.total=0;
  const el=document.getElementById('fileStatus');
  if(el) el.textContent='✅ 已从文本导入，合并 '+n+' 条记录'+noArt;
  toast('导入成功，合并 '+n+' 条 ✅');
  pcClose();
  if(typeof renderSet==='function') renderSet();
  if(typeof renderHome==='function') renderHome();
}
function pcClose(){
  document.getElementById('pcMask').classList.remove('on');
  const area=document.getElementById('pcArea');
  area.value=''; area.readOnly=false;
  PC.got={}; PC.total=0;
  const sel=document.getElementById('pcSel');
  sel.textContent='全选'; sel.onclick=pcSelectAll;
}
function exportFile(){
  try{
    const blob=new Blob([JSON.stringify(ghPack())],{type:'application/json'});
    const a=document.createElement('a');
    a.href=URL.createObjectURL(blob);
    a.download='刷题进度-'+today()+'.json';
    document.body.appendChild(a); a.click();
    setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 4000);
    const el=document.getElementById('fileStatus');
    if(el) el.textContent='已导出 '+Math.round(blob.size/1024)+' KB，发到另一台设备再「选择文件导入」';
    toast('文件已导出');
  }catch(e){ toast('导出失败'); }
}
function pickImport(){ const f=document.getElementById('impFile'); if(f) f.click(); }
function importFile(inp){
  const f=inp.files&&inp.files[0]; if(!f) return;
  const rd=new FileReader();
  rd.onload=function(){
    const el=document.getElementById('fileStatus');
    try{
      const data=JSON.parse(String(rd.result));
      const n=ghMerge(data);
      if(el) el.textContent='✅ 导入成功，合并 '+n+' 条记录';
      toast('导入成功 ✅');
    }catch(e){
      if(el) el.textContent='❌ 文件格式不对：'+(e.message||'');
    }
  };
  rd.readAsText(f);
  inp.value='';
}

/* ---- 笔迹缩略图重建（云端只传 strokes，缩略图本地生成） ---- */
function hwRenderThumb(rec, w){
  if(!rec||!rec.strokes||!rec.strokes.length) return '';
  const ratio=(rec.h||800)/(rec.w||600);
  const W=w, H=Math.min(420, Math.max(110, Math.round(w*ratio)));
  const c=document.createElement('canvas'); c.width=W; c.height=H;
  const x=c.getContext('2d');
  x.fillStyle='#fff'; x.fillRect(0,0,W,H);
  x.lineCap='round'; x.lineJoin='round';
  for(let k=0;k<rec.strokes.length;k++){
    const s=rec.strokes[k]; if(!s.pts||!s.pts.length) continue;
    x.strokeStyle=s.er?'#fff':(s.c||'#111318');
    if(s.pts.length===1){
      x.fillStyle=x.strokeStyle;
      x.beginPath(); x.arc(s.pts[0].x*W, s.pts[0].y*H, Math.max(0.8,(s.w||3)/2), 0, 6.2832); x.fill();
      continue;
    }
    for(let i=1;i<s.pts.length;i++){
      const a=s.pts[i-1], b=s.pts[i];
      x.lineWidth=Math.max(0.6,(s.w||3)*(0.45+(b.p!=null?b.p:0.5)*1.15));
      x.beginPath(); x.moveTo(a.x*W,a.y*H); x.lineTo(b.x*W,b.y*H); x.stroke();
    }
  }
  try{ return c.toDataURL('image/jpeg',0.5); }catch(e){ return ''; }
}
function hwRebuildThumbs(){
  hwEnsure();
  const ids=Object.keys(S.hw||{});
  let made=0;
  for(let i=0;i<ids.length;i++){
    const id=ids[i];
    if(S.hwThumb && S.hwThumb[id]) continue;
    const url=hwRenderThumb(S.hw[id], 300);
    if(url){ S.hwThumb[id]=url; made++; }
  }
  if(made){ const s=GH.suppress; GH.suppress=true; try{ save(); }catch(e){} GH.suppress=s; }
  return made;
}

/* ==================== v25：模考 / 朗读 / 顽固卡 / 拼写 / 错题本 ==================== */

/* ---------- 通用小工具 ---------- */
function hasEn(s){ return /[A-Za-z]{2,}/.test(String(s||'')); }
function isEnWord(s){
  var t=String(s||'').trim();
  return t.length<=40 && /[A-Za-z]/.test(t) && !/[\u4e00-\u9fff]/.test(t);
}
function enRuns(s){
  var m=String(s||'').match(/[A-Za-z][A-Za-z'\-]*(?:\s+[A-Za-z][A-Za-z'\-]*){0,24}/g);
  return m ? m.join(' ') : '';
}
function cardShort(c,n){
  var s=String(c.q||'').replace(/\s+/g,' ').trim();
  return s.length>(n||40) ? s.slice(0,n||40)+'…' : s;
}

/* ==================== ① 朗读（浏览器自带 TTS，不联网不花钱） ==================== */
var TTS={rate:1, ok:('speechSynthesis' in window), v:null};
try{ TTS.rate = (S.ttsRate||1); }catch(e){}
function ttsVoice(){
  if(!TTS.ok) return null;
  if(TTS.v) return TTS.v;
  var vs=[];
  try{ vs=speechSynthesis.getVoices()||[]; }catch(e){}
  var en=vs.filter(function(v){ return /^en/i.test(v.lang||''); });
  var pick=en.filter(function(v){ return /en[-_]US/i.test(v.lang) && /Samantha|Google|Natural|Microsoft/i.test(v.name||''); })[0]
        || en.filter(function(v){ return /en[-_]US/i.test(v.lang); })[0]
        || en[0];
  if(pick) TTS.v=pick;
  return pick;
}
if(TTS.ok){
  try{ speechSynthesis.onvoiceschanged=function(){ TTS.v=null; ttsVoice(); }; }catch(e){}
}
function ttsSpeak(text, rate){
  if(!TTS.ok){ toast('这个浏览器不支持朗读，换 Chrome / Safari 试试'); return; }
  var t=String(text||'').trim(); if(!t) return;
  try{ speechSynthesis.cancel(); }catch(e){}
  var u=new SpeechSynthesisUtterance(t);
  u.lang='en-US'; u.rate=rate||TTS.rate||1; u.pitch=1;
  var v=ttsVoice(); if(v){ try{ u.voice=v; }catch(e){} }
  try{ speechSynthesis.speak(u); }catch(e){ toast('这台设备朗读不出来'); }
}
function speakCard(){ var c=Q[qi]; if(!c) return; ttsSpeak(enRuns(c.q)||c.q); }
function speakAns(){ var c=Q[qi]; if(!c) return; ttsSpeak(enRuns(Array.isArray(c.a)?c.a.join(' '):c.a)); }
function setTtsRate(r){ TTS.rate=r; S.ttsRate=r; save(); renderSet(); toast('语速 '+r+'×'); }
function ttsTest(){ ttsSpeak('The quick brown fox jumps over the lazy dog.', TTS.rate); }

/* ==================== ② 顽固卡（反复错的题，换记法而不是再背一遍） ==================== */
function isLeech(c){
  var s=cst(c.id);
  if(s.st===1) return false;
  return (s.w||0)>=4 || (s.g||0)>=5;
}
function leechList(){ return HUB.cards.filter(isLeech); }
function leechWhy(c){
  var s=cst(c.id), t=[];
  if((s.w||0)>=4) t.push('错 '+s.w+' 次');
  if((s.g||0)>=5) t.push('蒙对 '+s.g+' 次');
  return t.join(' · ');
}
function leechSkip(id){
  var d=new Date(); d.setDate(d.getDate()+30);
  var k=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  var prev=cst(id);
  setCard(id, {st:prev.st, hit:prev.hit||0, lv:0, due:k, fav:prev.fav||0, w:0, g:0});
  toast('已压到 30 天后，这一个月先不烦你');
  renderStat();
}
function leechPractice(){
  var q=shuffle(leechList());
  if(!q.length){ toast('没有顽固卡 👍'); return; }
  startSession(q.slice(0,20), '顽固卡 · 换个记法', 'leech');
}
function startCard(id){
  var c=null;
  for(var i=0;i<HUB.cards.length;i++){ if(HUB.cards[i].id===id){ c=HUB.cards[i]; break; } }
  if(c) startSession([c], cardShort(c,18), 'one');
}

/* ==================== ③ 拼写模式（CET-6 单词：认得出 ≠ 写得出） ==================== */
var SP={on:false, list:[], i:0, right:0, wrong:0, checked:false, hintN:2};
function spellPool(){
  return HUB.cards.filter(function(c){
    return /^cet6-/.test(c.deck||'') && /^[A-Za-z][A-Za-z'\- ]{2,}$/.test(String(c.q||'').trim());
  });
}
function startSpell(deck){
  var pool=spellPool().filter(function(c){ return !deck || c.deck===deck; });
  if(!pool.length){ toast('这个题库没有单词卡'); return; }
  SP={on:true, list:shuffle(pool).slice(0,30), i:0, right:0, wrong:0, checked:false, hintN:2};
  go('spell');
  renderSpell();
}
function startSpellOne(id){
  var c=null;
  for(var i=0;i<HUB.cards.length;i++){ if(HUB.cards[i].id===id){ c=HUB.cards[i]; break; } }
  if(!c) return;
  SP={on:true, list:[c], i:0, right:0, wrong:0, checked:false, hintN:2};
  go('spell'); renderSpell();
}
function spellNorm(s){ return String(s==null?'':s).toLowerCase().replace(/[^a-z]/g,''); }
function spellLev(a,b){
  a=spellNorm(a); b=spellNorm(b);
  var m=a.length, n=b.length, i, j;
  if(!m) return n; if(!n) return m;
  var prev=[], cur=[];
  for(j=0;j<=n;j++) prev[j]=j;
  for(i=1;i<=m;i++){
    cur[0]=i;
    for(j=1;j<=n;j++){
      cur[j]=Math.min(prev[j]+1, cur[j-1]+1, prev[j-1]+(a.charAt(i-1)===b.charAt(j-1)?0:1));
    }
    prev=cur.slice();
  }
  return prev[n];
}
function spellHintText(w,n){
  var s=String(w), keep=Math.max(1,Math.min(s.length, n||2));
  var out='';
  for(var i=0;i<s.length;i++){
    if(s.charAt(i)===' '){ out+='  '; continue; }
    out += (i<keep ? s.charAt(i) : '·') + ' ';
  }
  return out.trim();
}
function renderSpell(){
  if(SP.i>=SP.list.length) return spellDone();
  var c=SP.list[SP.i];
  SP.checked=false;
  document.getElementById('spTitle').textContent='拼写 · CET-6';
  document.getElementById('spPos').textContent=(SP.i+1)+'/'+SP.list.length;
  document.getElementById('spScore').textContent='对 '+SP.right+' · 错 '+SP.wrong;
  var bar='';
  for(var i=0;i<SP.list.length;i++) bar+='<i class="'+(i<SP.i?'done':(i===SP.i?'cur':''))+'"></i>';
  document.getElementById('spBar').innerHTML=bar;

  var cn=String(c.a||'').split(/[；;]/)[0];
  var w=String(c.q).trim();
  var h='<div class="card-tag">'+(c.c?esc(c.c)+' · ':'')+(w.replace(/[^A-Za-z]/g,'').length)+' 个字母</div>'+
    '<div class="spell-cn">'+esc(cn)+'</div>'+
    '<div class="spell-hint" id="spHint">'+esc(spellHintText(w,SP.hintN))+'</div>'+
    '<input id="spInp" class="spell-inp" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="打出英文单词，回车">'+
    '<div id="spRes" class="spell-res"></div>';
  document.getElementById('spCard').innerHTML=h;
  document.getElementById('spAct').innerHTML=
    '<button class="act-btn" onclick="spellHint()">💡 提示</button>'+
    '<button class="act-btn" onclick="ttsSpeak(\''+String(w).replace(/'/g,'')+'\')">🔊 听写</button>'+
    '<button class="act-btn next" onclick="spellCheck()">检查 ⏎</button>';
  var inp=document.getElementById('spInp');
  inp.value='';
  inp.onkeydown=function(e){ if(e.key==='Enter'){ e.preventDefault(); SP.checked?spellNext():spellCheck(); } };
  setTimeout(function(){ try{ inp.focus(); }catch(e){} },120);
}
function spellHint(){
  var c=SP.list[SP.i];
  SP.hintN=Math.min(String(c.q).replace(/[^A-Za-z]/g,'').length, SP.hintN+1);
  document.getElementById('spHint').textContent=spellHintText(c.q, SP.hintN);
}
function spellCheck(){
  if(SP.checked) return;
  var c=SP.list[SP.i];
  var v=document.getElementById('spInp').value;
  if(!String(v).trim()){ toast('先打一个再检查'); return; }
  var ans=String(c.q).trim();
  var d=spellLev(v, ans);
  var exact=(spellNorm(v)===spellNorm(ans));
  var ok=(d<=1);
  SP.checked=true;
  if(ok){ SP.right++; applyScore(c.id, true); }
  else { SP.wrong++; applyScore(c.id, false); }
  document.getElementById('spScore').textContent='对 '+SP.right+' · 错 '+SP.wrong;
  var box=document.getElementById('spRes');
  box.className='spell-res '+(exact?'good':(ok?'near':'bad'));
  box.innerHTML=(exact?'✅ 拼对了':(ok?'🟡 差一个字母，算你过':'❌ 拼错了'))+
    '<div class="spell-ans">正确：<b>'+esc(ans)+'</b>'+
      (exact?'':'　你写的是「'+esc(v)+'」')+'</div>'+
    (c.n?'<div class="spell-note">'+esc(c.n)+'</div>':'')+
    hookHtml(c);
  document.getElementById('spAct').innerHTML=
    '<button class="act-btn" onclick="ttsSpeak(\''+String(ans).replace(/'/g,'')+'\')">🔊 再听</button>'+
    '<button class="act-btn next" onclick="spellNext()">下一个 →</button>';
  var inp=document.getElementById('spInp'); if(inp) inp.readOnly=true;
}
function spellNext(){ SP.i++; renderSpell(); }
function spellDone(){
  var t=SP.right+SP.wrong, rate=t?Math.round(SP.right/t*100):0;
  document.getElementById('spCard').innerHTML=
    '<div class="done-box"><div class="big">'+(rate>=90?'🎉':rate>=70?'👍':'💪')+'</div>'+
    '<h2>拼写完成</h2><p>共 '+t+' 个 · 对 '+SP.right+' · 错 '+SP.wrong+' · '+rate+'%</p>'+
    '<p style="color:var(--sub);font-size:13px">错的那个词已经打回最底层，明天会再考你一次。</p>'+
    '<button class="big-btn" onclick="go(\'home\')">回首页</button></div>';
  document.getElementById('spBar').innerHTML='';
  document.getElementById('spAct').innerHTML=
    '<button class="act-btn" onclick="startSpell()">再来 30 个</button>'+
    '<button class="act-btn next" onclick="startSpell(\'cet6-listen\')">只练听力场景词</button>';
}

/* ==================== ④ 错题本（可打印） ==================== */
function wrongCards(){ return HUB.cards.filter(function(c){ return cst(c.id).st<0; }); }
function renderWB(){
  var list=wrongCards();
  var box=document.getElementById('wbBody');
  if(!list.length){ box.innerHTML='<div class="empty">还没有错题。答错的题会自动进这里。<br><br><button class="big-btn ghost" onclick="go(\'home\')">回首页</button></div>'; return; }
  var groups={}, order=[];
  list.forEach(function(c){
    var k=(Array.isArray(c.k)&&c.k[0])?c.k[0]:'未分类';
    if(!groups[k]){ groups[k]=[]; order.push(k); }
    groups[k].push(c);
  });
  var h='<div class="wb-head">共 '+list.length+' 张 · 按知识点分组 · 题干 + 答案 + 钩子，打印出来晚上过一遍</div>';
  order.forEach(function(k){
    var arr=groups[k];
    h+='<div class="wb-group"><div class="wb-gh">'+esc(kidName(k))+' · '+arr.length+' 张</div>';
    arr.forEach(function(c,i){
      h+='<div class="wb-item"><div class="wb-q"><b>'+(i+1)+'.</b> '+esc(c.q)+'</div>'+
         '<div class="wb-a"><span>答</span>'+esc(Array.isArray(c.a)?c.a.join('；'):c.a)+'</div>'+
         (c.n?'<div class="wb-n">💡 '+esc(c.n)+'</div>':'')+
         '</div>';
    });
    h+='</div>';
  });
  box.innerHTML=h;
  document.getElementById('wbSub').textContent=list.length+' 张';
}
function kidName(k){
  try{
    var all=knowAll();
    for(var i=0;i<all.length;i++){ if(all[i].id===k) return all[i].n||k; }
  }catch(e){}
  return k;
}
function printWB(){ try{ window.print(); }catch(e){ toast('这台设备不支持直接打印'); } }

/* ==================== ⑤ 模考 ==================== */
var PAPERS=[
  {id:'full', name:'834 全真卷', min:120,
   sub:'名解 6 · 简答 4 · 判断 10 · 选择 10 · 填空 10　共 40 题 / 100 分 / 120 分钟',
   parts:[{deck:'biochem-834', n:6, each:3, name:'名词解释'},
          {deck:'biochem-834-essay', n:4, each:8, name:'简答论述'},
          {deck:'biochem-834-tf', n:10, each:1, name:'判断'},
          {deck:'biochem-834-mc', n:10, each:1.5, name:'选择'},
          {deck:'biochem-834-fill', n:10, each:2.5, name:'填空'}]},
  {id:'mid', name:'期中快测', min:30,
   sub:'课堂层 20 题 / 100 分 / 30 分钟（老师 PPT + 作业 + 本校期中）',
   parts:[{deck:'__core', n:20, each:5, name:'综合'}]},
  {id:'quick', name:'10 题小测', min:10,
   sub:'10 题 / 100 分 / 10 分钟 · 只抽客观题（选择 / 判断 / 填空），交卷立刻出分',
   parts:[{deck:'__obj', n:10, each:10, name:'综合'}]}
];
var EX={on:false, paper:null, items:[], i:0, ans:{}, self:{}, left:0, timer:null, submitted:false};

function examPool(deck){
  if(deck==='__core') return coreCards();
  if(deck==='__any') return HUB.cards.slice();
  if(deck==='__obj'){
    var isObj=function(c){ return c.t==='mc'||c.t==='tf'||(c.t==='fill'&&String(c.q).indexOf('__')>=0); };
    var core=coreCards().filter(isObj);
    return core.length>=10 ? core : HUB.cards.filter(isObj);   /* 课堂层够就只用课堂层 */
  }
  return HUB.cards.filter(function(c){ return c.deck===deck; });
}
function startExam(pid){
  var p=null;
  for(var i=0;i<PAPERS.length;i++) if(PAPERS[i].id===pid) p=PAPERS[i];
  if(!p) return;
  var items=[], used={};
  p.parts.forEach(function(pt){
    var pool=shuffle(examPool(pt.deck)).filter(function(c){ return !used[c.id]; });
    pool.slice(0,pt.n).forEach(function(c){ used[c.id]=1; items.push({c:c, pi:p.parts.indexOf(pt), each:pt.each}); });
  });
  if(!items.length){ toast('抽不到题，检查题库'); return; }
  EX={on:true, paper:p, items:items, i:0, ans:{}, self:{}, left:p.min*60, timer:null, submitted:false};
  go('exam');
  renderExam();
  if(EX.timer) clearInterval(EX.timer);
  EX.timer=setInterval(function(){
    if(!EX.on || EX.submitted) return;
    EX.left--;
    var el=document.getElementById('exTimer');
    if(el){
      el.textContent=exFmt(EX.left);
      el.className='ex-timer'+(EX.left<=300?' warn':'');
    }
    if(EX.left<=0){ examSubmit(true); }
  }, 1000);
}
function exFmt(s){
  if(s<0) s=0;
  var m=Math.floor(s/60), x=s%60;
  return (m<10?'0':'')+m+':'+(x<10?'0':'')+x;
}
function exPartName(it){
  try{ return EX.paper.parts[it.pi].name; }catch(e){ return ''; }
}
function renderExam(){
  if(!EX.on) return;
  if(EX.submitted) return;
  var it=EX.items[EX.i], c=it.c;
  document.getElementById('exTitle').textContent=EX.paper.name;
  document.getElementById('exPos').style.display='';
  document.getElementById('exPos').textContent=(EX.i+1)+'/'+EX.items.length;
  document.getElementById('exTimer').textContent=exFmt(EX.left);
  document.getElementById('exTimer').className='ex-timer'+(EX.left<=300?' warn':'');
  document.getElementById('exType').textContent=exPartName(it)+' · '+it.each+' 分';

  var bar='';
  for(var i=0;i<EX.items.length;i++) bar+='<i class="'+(EX.ans[EX.items[i].c.id]?'done':(i===EX.i?'cur':''))+'"></i>';
  document.getElementById('exBar').innerHTML=bar;

  var h='<div class="card-tag'+(c.c&&c.c.indexOf('考研')>=0?' exam':'')+'">'+
    (TYPE_LABEL[c.t]||c.t)+(c.c?' · '+esc(c.c):'')+'　<b style="color:var(--warn)">'+it.each+' 分</b></div>';
  h+='<div class="card-q">'+termify(c.q)+'</div>';

  var a=EX.ans[c.id];
  if(c.t==='tf'){
    var sel=(a&&a.v!=null)?a.v:null;
    h+='<div class="opts">';
    ['对','错'].forEach(function(o,i){
      h+='<button class="opt'+(sel===i?' '+(i===0?'sel-right':'sel-wrong'):'')+'" onclick="exPick('+i+')"><span class="letter">'+(i?'✗':'✓')+'</span>'+o+'</button>';
    });
    h+='</div>';
  }else if(c.t==='mc'){
    var sel=(a&&a.v!=null)?a.v:null;
    h+='<div class="opts">';
    (c.o||[]).forEach(function(o,i){
      var letters='ABCDEFGH';
      h+='<button class="opt'+(sel===i?' sel-right':'')+'" onclick="exPick('+i+')"><span class="letter">'+letters.charAt(i)+'</span>'+termify(o)+'</button>';
    });
    h+='</div>';
  }else if(c.t==='fill' && String(c.q).indexOf('__')>=0){
    var segs=String(c.q).split(/_{2,}/), n=segs.length-1;
    h='<div class="card-tag'+(c.c&&c.c.indexOf('考研')>=0?' exam':'')+'">'+
      (TYPE_LABEL[c.t]||c.t)+(c.c?' · '+esc(c.c):'')+'　<b style="color:var(--warn)">'+it.each+' 分</b></div>';
    h+='<div class="card-q fill-q">';
    var vals=(a&&a.v)||[];
    for(var k=0;k<segs.length;k++){
      h+=termify(segs[k]);
      if(k<n) h+='<input class="fill-inp" id="exf'+k+'" value="'+esc(vals[k]||'')+'" autocomplete="off" spellcheck="false" placeholder="'+(k+1)+'">';
    }
    h+='</div>';
  }else{
    var v=(a&&a.v)||'';
    h+='<textarea id="exTxt" class="ex-txt" rows="6" placeholder="写要点就行，交卷后对照参考答案自评">'+esc(v)+'</textarea>';
  }
  document.getElementById('exCard').innerHTML=h;

  if(c.t==='fill'){
    for(var k2=0;k2<(String(c.q).split(/_{2,}/).length-1);k2++){
      var el=document.getElementById('exf'+k2);
      if(el) el.oninput=function(){ exSaveFill(); };
    }
  }
  var ta=document.getElementById('exTxt');
  if(ta) ta.oninput=function(){ exSaveText(); };

  document.getElementById('exAct').innerHTML=
    '<button class="act-btn" onclick="exPrev()" '+(EX.i===0?'disabled style="opacity:.35"':'')+'>← 上一题</button>'+
    (EX.i===EX.items.length-1
      ? '<button class="act-btn next" onclick="examSubmit()">交卷</button>'
      : '<button class="act-btn next" onclick="exNext()">下一题 →</button>');
  window.scrollTo(0,0);
}
function exSaveFill(){
  var it=EX.items[EX.i], c=it.c;
  var n=String(c.q).split(/_{2,}/).length-1, vals=[];
  for(var k=0;k<n;k++){ var el=document.getElementById('exf'+k); vals.push(el?el.value:''); }
  EX.ans[c.id]={v:vals};
}
function exSaveText(){
  var it=EX.items[EX.i], c=it.c;
  var ta=document.getElementById('exTxt');
  EX.ans[c.id]={v:ta?ta.value:''};
}
function exPick(i){
  var it=EX.items[EX.i], c=it.c;
  EX.ans[c.id]={v:i};
  renderExam();
  if(EX.i<EX.items.length-1) setTimeout(function(){ if(EX.on && !EX.submitted) exNext(); }, 280);
}
function exNext(){ exSaveNow(); if(EX.i<EX.items.length-1){ EX.i++; renderExam(); } }
function exPrev(){ exSaveNow(); if(EX.i>0){ EX.i--; renderExam(); } }
function exSaveNow(){
  var it=EX.items[EX.i]; if(!it) return;
  var c=it.c;
  if(c.t==='fill') exSaveFill();
  else if(c.t!=='mc' && c.t!=='tf') exSaveText();
}
function exJump(i){ exSaveNow(); if(i>=0&&i<EX.items.length){ EX.i=i; renderExam(); } }
function exSheet(){
  var h='<div class="sheet">';
  EX.items.forEach(function(it,i){
    var a=EX.ans[it.c.id];
    var done=a && (a.v!=null && String(a.v)!=='' && (!Array.isArray(a.v) || a.v.join('').trim()!==''));
    h+='<b class="'+(done?'done':'')+(i===EX.i?' cur':'')+'" onclick="exSheetClose();exJump('+i+')">'+(i+1)+'</b>';
  });
  h+='</div>';
  var m=document.getElementById('exSheetMask');
  m.innerHTML='<div class="sheet-box"><div class="sheet-h">答题卡 · 点题号跳过去<button class="mini-btn" onclick="exSheetClose()">关闭</button></div>'+h+'</div>';
  m.classList.add('show');
}
function exSheetClose(){ document.getElementById('exSheetMask').classList.remove('show'); }

/* 判分：客观题自动，主观题交卷后自评 */
function examSubmit(auto){
  if(EX.submitted) return;
  exSaveNow();
  EX.submitted=true;
  if(EX.timer){ clearInterval(EX.timer); EX.timer=null; }
  var objFull=0, objGot=0, subjFull=0, list=[];
  EX.items.forEach(function(it){
    var c=it.c, a=EX.ans[c.id], ok=null, filled=false;
    if(c.t==='mc'){
      objFull+=it.each;
      if(a && a.v!=null){ ok=(a.v===c.a); filled=true; }
      else { ok=false; }                    /* 客观题没答 = 0 分 */
    }else if(c.t==='tf'){
      objFull+=it.each;
      var right=(String(c.a||'').indexOf('对')===0)?0:1;
      if(a && a.v!=null){ ok=(a.v===right); filled=true; }
      else { ok=false; }
    }else if(c.t==='fill' && String(c.q).indexOf('__')>=0){
      objFull+=it.each;
      var segs=String(c.q).split(/_{2,}/).length-1;
      var ans=String(c.a==null?'':c.a).split(/[；;]/).map(function(x){return x.trim();});
      if(a && a.v && a.v.join('').trim()!==''){
        filled=true; ok=true;
        for(var k=0;k<segs;k++){ if(!fillMatch(a.v[k]||'', ans[k]||'')) ok=false; }
      }else{ ok=false; }
    }else{
      subjFull+=it.each;
      if(a && String(a.v||'').trim()) filled=true;
    }
    if(ok!==null && filled){
      if(ok) objGot+=it.each;
      applyScore(c.id, ok);
    }
    list.push({it:it, ok:ok, filled:filled});
  });
  if(auto) toast('时间到，自动交卷');
  EX.result={objFull:objFull, objGot:objGot, subjFull:subjFull, list:list};
  renderExamResult();
}
function exAnsText(c){
  if(c.t==='mc'){
    var i=Number(c.a), letters='ABCDEFGH';
    return (c.o && c.o[i]!=null) ? (letters.charAt(i)+'. '+String(c.o[i])) : String(c.a);
  }
  if(c.t==='tf') return (String(c.a).indexOf('对')===0)?'对':'错';
  return Array.isArray(c.a)?c.a.join('；'):String(c.a);
}
function renderExamResult(){
  var r=EX.result;
  var subjGot=0;
  Object.keys(EX.self).forEach(function(k){ subjGot+=(EX.self[k]||0); });
  var total=Math.round((r.objGot+subjGot)*10)/10;
  var full=r.objFull+r.subjFull;
  var pct=full?Math.round(total/full*100):0;
  var h='<div class="ex-res-top">'+
    '<div class="ex-score"><b>'+total+'</b><span>/ '+full+' 分　（'+pct+'%）</span></div>'+
    '<div class="ex-break">客观题 '+r.objGot+' / '+r.objFull+'　主观题 '+Math.round(subjGot*10)/10+' / '+r.subjFull+'（自评）</div>'+
  '</div>';
  var wrong=[];
  h+='<div class="sec-title">📋 逐题对照</div>';
  r.list.forEach(function(o,i){
    var c=o.it.c, ansTxt=esc(exAnsText(c));
    var st='', graded=(EX.self[c.id]!=null);
    if(o.ok===true) st='<span class="ok-tag">对</span>';
    else if(o.ok===false) st='<span class="bad-tag">错</span>';
    else if(graded) st='<span class="ok-tag">已评 '+EX.self[c.id]+' 分</span>';
    else st=o.filled?'<span class="warn-tag">待自评</span>':'<span class="dim-tag">没写</span>';
    if(o.ok===false) wrong.push(c);
    h+='<div class="ex-line"><div class="ex-line-h"><b>'+(i+1)+'.</b> '+st+
       ' <span class="dim">'+exPartName(o.it)+' · '+o.it.each+' 分</span></div>'+
       '<div class="ex-line-q">'+esc(cardShort(c,80))+'</div>';
    if(o.ok===null && !graded){
      h+='<button class="mini-btn" style="margin:7px 0 2px" onclick="exOpen(\''+c.id+'\')">对照答案 →</button>'+
         '<div class="ex-ans" id="exa_'+i+'" style="display:none"><span>答</span>'+ansTxt+'</div>'+
         '<div class="grade-row">'+
           '<button class="mini-btn" onclick="exSelf(\''+c.id+'\',0)">不会 0</button>'+
           '<button class="mini-btn" onclick="exSelf(\''+c.id+'\','+(o.it.each/2)+')">写了一半</button>'+
           '<button class="mini-btn blue" onclick="exSelf(\''+c.id+'\','+o.it.each+')">基本全对</button></div>';
    }else{
      h+='<div class="ex-ans show"><span>答</span>'+ansTxt+'</div>';
    }
    h+='</div>';
  });
  var weak={};
  wrong.forEach(function(c){ (Array.isArray(c.k)?c.k:[]).forEach(function(k){ weak[k]=(weak[k]||0)+1; }); });
  var wk=Object.keys(weak).sort(function(a,b){ return weak[b]-weak[a]; }).slice(0,3);
  if(wk.length){
    h+='<div class="sec-title">🎯 这张卷子最该补的</div>';
    wk.forEach(function(k){
      h+='<div class="leech-row"><div class="leech-t">'+esc(kidName(k))+'<span>错 '+weak[k]+' 张</span></div>'+
         '<button class="mini-btn" onclick="exPracticeKid(\''+k+'\')">刷</button></div>';
    });
  }
  h+='<div class="btn-row" style="margin-top:16px">'+
     '<button class="big-btn" onclick="exFinish()">保存成绩 · 回首页</button>'+
     '<button class="big-btn ghost" onclick="go(\'examPick\')">再考一张</button></div>';
  document.getElementById('exCard').innerHTML=h;
  document.getElementById('exBar').innerHTML='';
  document.getElementById('exAct').innerHTML='';
  document.getElementById('exTimer').textContent='已交卷';
  document.getElementById('exPos').style.display='none';
  document.getElementById('exType').textContent='成绩';
  EX.lastTotal=total;
}
function exOpen(id){
  var r=EX.result, idx=-1;
  r.list.forEach(function(o,i){ if(o.it.c.id===id) idx=i; });
  var el=document.getElementById('exa_'+idx);
  if(el) el.style.display='block';
}
function exSelf(id, score){
  EX.self[id]=score;
  var it=null;
  for(var i=0;i<EX.items.length;i++){ if(EX.items[i].c.id===id) it=EX.items[i]; }
  var full=it?it.each:1;
  if(score>=full*0.99) applyScore(id, true);
  else if(score>0) applyScore(id, false, true);   /* 写了一半 → 记「模糊」 */
  else applyScore(id, false);
  renderExamResult();
}
function exQuit(){
  if(!EX.on || EX.submitted){ go('home'); return; }
  if(!confirm('退出这张卷子？中途退出算弃考，不记成绩。')) return;
  if(EX.timer){ clearInterval(EX.timer); EX.timer=null; }
  EX.on=false;
  go('home');
}
function exPracticeKid(k){
  var q=HUB.cards.filter(function(c){ return Array.isArray(c.k)&&c.k.indexOf(k)>=0 && cst(c.id).st<0; });
  if(!q.length) q=HUB.cards.filter(function(c){ return Array.isArray(c.k)&&c.k.indexOf(k)>=0; });
  startSession(shuffle(q).slice(0,20), '补漏 · '+kidName(k), 'kid');
}
function exFinish(){
  var r=EX.result, total=EX.lastTotal||0, full=r.objFull+r.subjFull;
  if(!S.exams) S.exams=[];
  S.exams.push({d:today(), p:EX.paper.id, n:EX.paper.name, s:total, f:full, t:Date.now()});
  if(S.exams.length>50) S.exams=S.exams.slice(-50);
  save();
  EX.on=false;
  go('home');
  toast('成绩已存：'+total+' / '+full);
}
function renderExamPick(){
  var h='<div class="wb-head">选一张卷子。开始后计时，中途退出算弃考（不记成绩）。</div>';
  PAPERS.forEach(function(p){
    h+='<div class="paper-card" onclick="startExam(\''+p.id+'\')">'+
       '<div class="paper-n">'+esc(p.name)+'</div>'+
       '<div class="paper-s">'+esc(p.sub)+'</div>'+
       '<div class="paper-go">开始 →</div></div>';
  });
  var ex=(S.exams||[]).slice(-5).reverse();
  if(ex.length){
    h+='<div class="sec-title">📈 最近模考</div>';
    ex.forEach(function(e){
      h+='<div class="ex-hist"><span>'+esc(e.d)+'</span><b>'+esc(e.n)+'</b><i>'+e.s+' / '+e.f+'</i></div>';
    });
  }else{
    h+='<div class="empty" style="margin-top:14px">还没考过。第一次建议选「期中快测」，20 题 30 分钟，先适应计时压力。</div>';
  }
  document.getElementById('exPickBody').innerHTML=h;
}

/* ==================== v26：易混概念对照（专治"两个概念在脑子里串了"） ==================== */
var MIXED=[
  {k:['kinetics'], a:'Km（米氏常数）', ad:'反应速度达到最大速度一半时的底物浓度，单位 mol/L。反映酶对底物的亲和力：<b>Km 越小，亲和力越大</b>。只与酶和底物的种类、温度、pH 有关，<b>与酶浓度无关</b>。',
   b:'Vmax（最大反应速度）', bd:'底物饱和时的最大速度，单位 mol/(L·s)。<b>与酶浓度成正比</b>——酶加倍，Vmax 加倍。',
   rule:'题目说「加酶量 / 酶浓度」→ 看 Vmax；说「换底物 / 亲和力 / 达到一半速度」→ 看 Km。'},
  {k:['inhibit'], a:'竞争性抑制', ad:'抑制剂与底物结构相似，<b>争同一个活性中心</b>；Km 增大、Vmax 不变；<b>加大底物浓度可以解除</b>。',
   b:'非竞争性抑制', bd:'抑制剂结合在活性中心<b>以外</b>的部位；Km 不变、Vmax 降低；加多少底物都解除不了。',
   rule:'双倒数图交点在 y 轴 = 竞争性（Vmax 不变）；交点在 x 轴 = 非竞争性（Km 不变）。'},
  {k:['inhibit'], a:'可逆抑制', ad:'非共价结合，透析、超滤可以去除，抑制程度随抑制剂浓度变化。竞争性、非竞争性都属于这类。',
   b:'不可逆抑制', bd:'与活性中心基团<b>共价结合</b>（有机磷—胆碱酯酶、氰化物—细胞色素氧化酶），透析去不掉，只能等新酶合成。',
   rule:'判据只有一条：透析后活性回不回来。'},
  {k:['regulate'], a:'别构调节', ad:'效应物<b>非共价</b>结合调节部位，改变构象，快速可逆；有协同效应，动力学曲线呈 S 形。',
   b:'共价修饰调节', bd:'由<b>另一种酶</b>催化（磷酸化 / 去磷酸化），共价改变酶的结构，需要另一种酶才能逆转，放大效应强。',
   rule:'有没有「另一个酶」参与：有 = 共价修饰，没有 = 别构。'},
  {k:['struct'], a:'α-螺旋', ad:'<b>同一条肽链内</b>，第 i 位 C=O 与第 i+4 位 N-H 形成氢键；每圈 3.6 个残基，螺距 0.54 nm，每个残基上升 0.15 nm。',
   b:'β-折叠', bd:'<b>两条或多条链段之间</b>形成氢键，呈锯齿状片层；相邻链间距约 0.47 nm。',
   rule:'氢键在链内 = α螺旋，链间 = β折叠。注意 <b>0.34 nm 是 B-DNA 的碱基对间距</b>，不是蛋白质的。'},
  {k:['struct','sep'], a:'变性', ad:'理化因素破坏<b>空间构象</b>，二级以上结构解体，一级结构（肽键）不变；生物活性丧失，<b>但未必沉淀</b>。',
   b:'沉淀', bd:'蛋白质从溶液中<b>析出</b>，可由盐析、等电点、有机溶剂引起；<b>未必变性</b>（盐析出的蛋白还能溶回去）。',
   rule:'问「活性 / 构象」是变性，问「析出 / 溶解度」是沉淀。两件事可以同时发生，也可以只发生一件。'},
  {k:['sep'], a:'盐析', ad:'<b>高浓度</b>中性盐（硫酸铵）夺走水化层、中和电荷，蛋白析出；不变性、可复溶，用来做分段纯化。',
   b:'盐溶', bd:'<b>低浓度</b>盐提高离子强度、屏蔽分子间电荷排斥，蛋白溶解度反而升高。',
   rule:'盐多析出、盐少溶解。同一种盐，浓度不同，效果相反。'},
  {k:['dnarep','trans'], a:'复制', ad:'DNA→DNA，<b>半保留</b>；需要 RNA 引物提供 3\'-OH；双向进行；A 配 T；整条模板都复制。',
   b:'转录', bd:'DNA→RNA；只转录<b>基因区段</b>（有启动子、终止子）；<b>不需要引物</b>；A 配 U；只有一条链当模板。',
   rule:'看产物 + 要不要引物。要引物的一定是复制。'},
  {k:['trans','transl'], a:'转录', ad:'以 DNA 为模板合成 RNA，发生在细胞核（原核在同一空间进行）。',
   b:'翻译', bd:'以 <b>mRNA</b> 为模板，在核糖体上合成多肽；需要 tRNA 搬运氨基酸、GTP 供能。',
   rule:'模板是 DNA 还是 mRNA——这一步就能分开。'},
  {k:['trans'], a:'内含子', ad:'基因中<b>转录但不翻译</b>的片段，转录后由剪接体切除；可变剪接的来源，一个基因因此能出多种蛋白。',
   b:'外显子', bd:'保留在成熟 mRNA 中、<b>编码氨基酸</b>的片段。',
   rule:'成熟 mRNA 里还在的是外显子，被剪掉的是内含子。'},
  {k:['geneexp'], a:'启动子', ad:'<b>RNA 聚合酶</b>识别并结合、决定转录起始位点的 DNA 序列（原核 -10 区、-35 区）。',
   b:'操纵基因', bd:'<b>阻遏蛋白</b>结合的 DNA 序列，只决定这一段「开 / 关」，不结合聚合酶。',
   rule:'结合的是聚合酶（启动子）还是阻遏蛋白（操纵基因）。'},
  {k:['geneexp'], a:'顺式作用元件', ad:'<b>DNA 上的序列</b>（启动子、增强子、沉默子），只能调控同一条 DNA 上的基因，不能扩散到别处。',
   b:'反式作用因子', bd:'由别的基因编码的<b>蛋白质</b>（转录因子），可扩散，能作用于任何带相应元件的基因。',
   rule:'本身是 DNA 序列（顺式）还是蛋白质（反式）。'},
  {k:['geneexp'], a:'增强子', ad:'<b>远距离</b>也能增强转录，位置和方向都不敏感，正着放反着放都有效。',
   b:'沉默子', bd:'抑制转录，同样位置方向不敏感，需要结合阻遏蛋白起作用。',
   rule:'上调是增强子，下调是沉默子——两者的共同点是"远、且不分方向"。'},
  {k:['mutation'], a:'错义突变', ad:'碱基替换使一个密码子变成<b>编码另一种氨基酸</b>的密码子，产生异常蛋白（镰刀型贫血：Glu→Val）。',
   b:'无义突变', bd:'密码子变成<b>终止密码子</b>（UAA / UAG / UGA），肽链提前终止，通常后果更严重。',
   rule:'看有没有提前出现终止信号。'},
  {k:['mutation'], a:'移码突变', ad:'插入或缺失<b>非 3 整数倍</b>的碱基，读码框整体改变，<b>突变点之后</b>的氨基酸全部改变。',
   b:'点突变', bd:'单个碱基替换（转换 / 颠换），只改变<b>一个</b>密码子。',
   rule:'突变点之后的序列是不是全变了——全变就是移码。'},
  {k:['chromo'], a:'倒位', ad:'<b>同一条染色体</b>上某片段 180° 翻转，基因数目不变、顺序变了；倒位杂合子会抑制交换。',
   b:'易位', bd:'染色体片段接到<b>另一条非同源染色体</b>上（相互易位、罗伯逊易位）。',
   rule:'有没有跨染色体。没跨就是倒位，跨了就是易位。'},
  {k:['chromo'], a:'缺失', ad:'染色体片段<b>丢了</b>（5p- 猫叫综合征）；缺失杂合子可能出现假显性。',
   b:'重复', bd:'片段<b>多出一份</b>（果蝇棒眼，16A 区重复）；可产生位置效应。',
   rule:'长度变短是缺失，变长是重复。'},
  {k:['linkage'], a:'完全连锁', ad:'同一染色体上的基因<b>完全不交换</b>，测交后代只有亲本型（例：雄果蝇）。',
   b:'不完全连锁', bd:'发生交换，出现<b>重组型</b>，重组率 < 50%；重组率可用来算图距。',
   rule:'测交后代有没有重组型。有 → 不完全连锁。'},
  {k:['quant'], a:'基因频率', ad:'某等位基因的数目 ÷ 该位点<b>等位基因总数</b>。',
   b:'基因型频率', bd:'某基因型的个体数 ÷ 群体<b>个体总数</b>。',
   rule:'分母是"等位基因"还是"个体"。Hardy-Weinberg 平衡下 p = f(AA) + ½f(Aa)。'},
  {k:['quant'], a:'遗传漂变', ad:'<b>小群体</b>中基因频率的<b>随机</b>波动，与适应无关，可导致基因固定或丢失（瓶颈效应、奠基者效应）。',
   b:'自然选择', bd:'由<b>适应度差异</b>引起的<b>定向</b>改变，适者留下更多后代。',
   rule:'随机 = 漂变，定向 = 选择。小群体里漂变才明显。'},
  {k:['micro'], a:'转化', ad:'<b>感受态细菌</b>直接摄取环境中的裸露 DNA（肺炎双球菌实验）。',
   b:'转导', bd:'以<b>噬菌体</b>为媒介把供体 DNA 带进受体（普遍性 / 局限性转导）。',
   rule:'有没有噬菌体当搬运工。顺带记：接合是通过性菌毛直接接触转移质粒，连搬运工都没有。'},
  {k:['glycolysis','gluconeo'], a:'糖酵解', ad:'葡萄糖→2 丙酮酸，<b>净生成 2 ATP + 2 NADH</b>，在胞质，无氧也能进行。',
   b:'糖异生', bd:'丙酮酸→葡萄糖，<b>消耗 4 ATP + 2 GTP + 2 NADH</b>，主要在肝（肾）。',
   rule:'方向 + 能量正负。糖异生<b>不是糖酵解的简单逆反</b>，要靠 3 个底物循环绕过不可逆步骤。'},
  {k:['etc','atpcalc'], a:'底物水平磷酸化', ad:'高能底物把磷酸基团<b>直接</b>交给 ADP（1,3-二磷酸甘油酸、PEP、琥珀酰 CoA）。',
   b:'氧化磷酸化', bd:'NADH / FADH₂ 经<b>呼吸链</b>传递，泵出质子形成梯度，ATP 合酶合成 ATP。',
   rule:'有没有呼吸链和质子梯度。有就是氧化磷酸化。'},
  {k:['betaox'], a:'β-氧化', ad:'<b>线粒体基质</b>，降解方向；以 FAD、NAD⁺ 为受氢体；产物乙酰 CoA + NADH + FADH₂。',
   b:'脂肪酸合成', bd:'<b>胞质</b>，合成方向；以 <b>NADPH</b> 供氢；丙二酰 CoA 提供二碳单位，ACP 携带酰基。',
   rule:'部位 + 辅酶 + 方向。口诀：<b>氧化在线粒体用 NAD，合成在胞质用 NADP</b>。'},
  {k:['betaox'], a:'生酮', ad:'<b>肝线粒体</b>，乙酰 CoA 过剩（饥饿、糖尿病）时合成乙酰乙酸、β-羟丁酸、丙酮。',
   b:'酮体利用', bd:'<b>肝外组织</b>（心、脑、骨骼肌）氧化利用酮体；肝缺琥珀酰 CoA 转硫酶，<b>能造不能用</b>。',
   rule:'肝能生酮、不能利用酮体——这是最常考的一句。'},
  {k:['dnarep','trans'], a:'DNA 聚合酶', ad:'需要<b>引物 3\'-OH</b>，沿 5\'→3\' 延伸，具 3\'→5\' 外切<b>校对</b>活性。',
   b:'RNA 聚合酶', bd:'<b>不需要引物</b>，可直接起始，<b>没有校对</b>活性。',
   rule:'要不要引物：要的一定是 DNA 聚合酶。'},
  {k:['mendel'], a:'完全显性', ad:'杂合子表现与显性纯合子<b>完全一致</b>（AA = Aa），F₂ 表型比 3:1。',
   b:'不完全显性', bd:'杂合子表现为<b>中间型</b>（红花×白花→粉花），F₂ 表型比 <b>1:2:1</b>。',
   rule:'看 F₂ 的表型比：3:1 是完全显性，1:2:1 是不完全显性（此时表型比 = 基因型比）。'},
  {k:['num','mendel'], a:'有丝分裂', ad:'一次复制、<b>一次</b>分裂，子细胞 2n 与母细胞相同；无联会、无交换。',
   b:'减数分裂', bd:'一次复制、<b>两次</b>分裂，子细胞 n（染色体数减半）；前期 I 有联会和交换。',
   rule:'子细胞染色体数减没减半——减半就是减数分裂。'}
];

var MIXOPEN={};
function mixFor(kids){
  if(!Array.isArray(kids)||!kids.length) return [];
  var out=[];
  for(var i=0;i<MIXED.length;i++){
    var g=MIXED[i];
    for(var j=0;j<g.k.length;j++){ if(kids.indexOf(g.k[j])>=0){ out.push({i:i, g:g}); break; } }
  }
  return out;
}
function mixToggle(i){
  MIXOPEN[i]=!MIXOPEN[i];
  renderMix();
  if(MIXOPEN[i]){
    var el=document.getElementById('mix'+i);
    if(el) el.scrollIntoView({block:'center', behavior:'smooth'});
  }
}
function openMix(i){
  go('mix');
  MIXOPEN[i]=true;
  renderMix();
  setTimeout(function(){
    var el=document.getElementById('mix'+i);
    if(el) el.scrollIntoView({block:'center'});
  },80);
}
function renderMix(){
  var h='<div class="wb-head">共 '+MIXED.length+' 组最容易串的概念。点标题展开两边的定义，<b>最后那句「判据」是考场上真正用得上的</b>。</div>';
  MIXED.forEach(function(g,i){
    var open=!!MIXOPEN[i];
    h+='<div class="mix-item'+(open?' open':'')+'" id="mix'+i+'">'+
      '<div class="mix-h" onclick="mixToggle('+i+')">'+
        '<div class="mix-names"><b>'+g.a+'</b><span class="mix-vs">⇄</span><b>'+g.b+'</b></div>'+
        '<span class="mix-arrow">'+(open?'▴':'▾')+'</span></div>'+
      '<div class="mix-rule">🎯 '+g.rule+'</div>'+
      (open?'<div class="mix-body">'+
        '<div class="mix-col"><h4>'+g.a+'</h4><p>'+g.ad+'</p></div>'+
        '<div class="mix-col b"><h4>'+g.b+'</h4><p>'+g.bd+'</p></div>'+
      '</div>':'')+
      '</div>';
  });
  document.getElementById('mixBody').innerHTML=h;
}
/* 答错时给一个「和它最容易混的是……」的入口 */
function mixLinkHtml(c){
  var hit=mixFor(c&&c.k);
  if(!hit.length) return '';
  var g=hit[0].g, i=hit[0].i;
  return '<button class="mix-link" onclick="event.stopPropagation();openMix('+i+')">⚖️ 和它最容易混的是：'+
    g.a+' ⇄ '+g.b+'</button>';
}

/* ==================== v27 账号云同步（邮箱登录） ==================== */
/* 换掉 GitHub 令牌的三个理由：
   ① 令牌 90 天过期，到期就是个 401，你还得记得去重生成；
   ② 每台设备都要粘一次，粘错一个字符就白折腾；
   ③ 国内直连 api.github.com 时好时坏。
   现在是邮箱 + 密码：手机登一次、平板登一次，之后打开就自动对齐。       */

const CLOUD_CFG_KEY = 'xzt_cloud_acc';

/* ← 如果你已经建好服务器，把两个值填在这里，所有设备打开就只剩「登录」一个动作 */
/* 内置服务器（方案A）。设置页手动填的值会覆盖它；换项目时改这两行重新发布即可 */
/* ==================== 个人账号 + Worker 同步（v37 重构） ==================== *//* 后端：你自己的 Cloudflare Worker（ddddlyt.top/api/*）   第一层：Cloudflare Access 邮箱锁（连页面都进不来）   第二层：本账号系统（用户名+密码，数据只在你 KV 里，PBKDF2 加盐哈希）   接口（详见 worker.js）：     POST /api/setup   {username,password} → {token,user}   仅首次     POST /api/login   {username,password} → {token,user}     GET  /api/sync    → {ok,data:<整包 ghPack 对象或 null>}     PUT  /api/sync    body=整包 JSON     POST /api/sub     {fname,ftype,fsize,note,content} → {ok,item}     GET  /api/sub     → {ok,items:[...]}     DELETE /api/sub/:id   令牌存 localStorage，请求带 Authorization: Bearer <token>*/var CLOUD = { on:false, busy:false, dirty:false, suppress:false, auto:true, lastAt:0, err:'', user:'', token:'', timer:null };
function cloudCfg(){ try{ return JSON.parse(localStorage.getItem(CLOUD_CFG_KEY)||'{}'); }catch(e){ return {}; } }
function cloudSetCfg(c){ localStorage.setItem(CLOUD_CFG_KEY, JSON.stringify(c)); }
function cloudApplySession(){  const c=cloudCfg();  CLOUD.on   = !!c.token;  CLOUD.token= c.token||'';  CLOUD.user = c.user||'';  CLOUD.lastAt = c.lastAt||0;  CLOUD.auto = (c.auto===undefined) ? true : !!c.auto;}function cloudSaveSession(s){  const c=cloudCfg();  c.token=s.token; c.user=s.user; c.lastAt=Date.now();  cloudSetCfg(c); cloudApplySession();}function cloudClearSession(){  const c=cloudCfg();  delete c.token; delete c.user; delete c.lastAt;  cloudSetCfg(c); cloudApplySession();}function cloudStatus(msg, cls){  const el=document.getElementById('accMsg'); if(!el) return;  el.textContent=msg; el.className='gh-status'+(cls?(' '+cls):'');}function cloudTime(ts){  if(!ts) return '还没同步过';  const d=new Date(ts), n=new Date();  const hm=String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');  if(d.toDateString()===n.toDateString()) return '今天 '+hm;  return (d.getMonth()+1)+'/'+d.getDate()+' '+hm;}/* --- 网络层 --- */async function apiReq(path, opts){  opts=opts||{};  const h=Object.assign({'Content-Type':'application/json'}, opts.headers||{});  if(CLOUD.token) h['Authorization']='Bearer '+CLOUD.token;  let ctl=null;  if(typeof AbortController!=='undefined') ctl=new AbortController();  const tm=setTimeout(function(){ if(ctl) ctl.abort(); }, 20000);  let r;  try{    r=await fetch('/api'+path, {method:opts.method||'GET', headers:h, body:opts.body, signal:ctl?ctl.signal:undefined});  }catch(e){ clearTimeout(tm); throw Object.assign(new Error('连不上服务器'), {net:true}); }  clearTimeout(tm);  const txt=await r.text();  let data=null;  try{ data=txt?JSON.parse(txt):null; }catch(e){ data=txt; }  if(!r.ok){    let msg=(data&&(data.error||data.msg||data.message))||('HTTP '+r.status);    throw Object.assign(new Error(msg), {status:r.status, data:data});  }  return data;}function apiErrText(e){  const m=String((e&&e.message)||'');  if(e&&e.net) return '连不上服务器，换下网络（Wi-Fi / 流量）再试';  if(e&&e.status===401) return '登录已过期或账号还没创建，重新进一次页面';  if(e&&e.status===403) return '没通过站点验证：刷新页面，走一遍邮箱验证码（Cloudflare Access）';  return m||'出错了';}/* --- 输入校验 --- */function cloudCheckInput(){  const gU=document.getElementById('gateUser'), gP=document.getElementById('gatePw');  const sU=document.getElementById('clUser'), sP=document.getElementById('clPw');  const u=((gU&&gU.value)||'').trim() || ((sU&&sU.value)||'').trim();  const pw=((gP&&gP.value)||'').trim() || ((sP&&sP.value)||'').trim();  if(!/^[A-Za-z0-9_]{4,32}$/.test(u)) return {err:'用户名 4-32 位（字母、数字、下划线）'};  if(pw.length<8) return {err:'密码至少 8 位'};  return {u:u, pw:pw};}/* --- 首次创建账号 / 登录 --- */async function cloudSignup(){  const v=cloudCheckInput(); if(v.err){ cloudStatus('⚠️ '+v.err,'err'); return; }  cloudStatus('正在检查账号是否已创建…');  try{    const st=await apiReq('/setup-status');    if(st.setup){ cloudStatus('⚠️ 账号已经建好了，直接点「登录」','warn'); return; }  }catch(e){ cloudStatus('❌ '+apiErrText(e),'err'); return; }  cloudStatus('正在创建你的专属账号…');  try{    const s=await apiReq('/setup', {method:'POST', body:JSON.stringify({username:v.u, password:v.pw})});    cloudSaveSession(s);    cloudAfterLogin('账号已创建');  }catch(e){ cloudStatus('❌ '+apiErrText(e),'err'); }}async function cloudLogin(){  const v=cloudCheckInput(); if(v.err){ cloudStatus('⚠️ '+v.err,'err'); return; }  cloudStatus('正在登录…');  try{    const s=await apiReq('/login', {method:'POST', body:JSON.stringify({username:v.u, password:v.pw})});    cloudSaveSession(s);    cloudAfterLogin('登录成功');  }catch(e){ cloudStatus('❌ '+apiErrText(e),'err'); }}function cloudAfterLogin(msg){  gateHide();  renderAcc(); renderSubUI();  cloudStatus('☁️ '+msg+'，正在对齐数据…','ok');  setTimeout(function(){ cloudSync(false,'both'); }, 120);}async function cloudLogout(){  if(!confirm('退出后本机不再自动同步（学习记录不会删，仍在本机）。确定？')) return;  cloudClearSession();  renderAcc(); renderSubUI(); cloudStatus('已退出');}/* --- 同步 --- */async function cloudSync(silent, mode){  mode=mode||'both';  if(!CLOUD.on){ if(!silent) toast('先登录账号'); return; }  if(CLOUD.busy){ CLOUD.dirty=true; if(!silent) cloudStatus('上一轮还没结束，稍后自动补一次…'); return; }  CLOUD.busy=true; CLOUD.dirty=false; CLOUD.suppress=true;  if(!silent) cloudStatus(mode==='pull'?'正在下载…':(mode==='push'?'正在上传…':'同步中…'));  try{    let changed=0, bytes=0, ok=false;    for(let attempt=0; attempt<3 && !ok; attempt++){      let remote=null;      if(mode!=='push'){        try{ const resp=await apiReq('/sync'); remote = (resp && resp.data) ? resp.data : null; }        catch(e){ if(e.status!==404) throw e; }      }      if(remote && typeof remote==='object') changed += ghMerge(remote);      if(mode==='pull'){ ok=true; break; }      const pack=ghPack();      const raw=JSON.stringify(pack);      if(raw.length>3.5*1024*1024) throw Object.assign(new Error('数据太大'), {big:true, size:Math.round(raw.length/1024)});      await apiReq('/sync', {method:'PUT', body:raw});      bytes=raw.length; ok=true;    }    if(!ok) throw new Error('云端被另一台设备同时改动，重试三次仍冲突');    const c=cloudCfg(); c.lastAt=Date.now(); cloudSetCfg(c); CLOUD.lastAt=c.lastAt;    const sizeTxt=bytes?(' · '+Math.max(1,Math.round(bytes/1024))+' KB'):'';    cloudStatus('✅ 已同步 '+cloudTime(CLOUD.lastAt)+(changed?(' · 合并 '+changed+' 条'):'')+sizeTxt,'ok');    if(!silent) toast(mode==='pull'?'已从云端下载 ✅':'同步完成 ✅');  }catch(e){    CLOUD.err=e.message||'';    const t=e.big?('数据 '+e.size+' KB 超过 3.5 MB 上限，多是手写笔迹攒太多'):apiErrText(e);    cloudStatus('❌ 同步失败：'+t,'err');    if(!silent) toast('同步失败：'+t);  }finally{    CLOUD.busy=false; CLOUD.suppress=false;    if(CLOUD.dirty) setTimeout(function(){ CLOUD.dirty=false; cloudSync(true); }, 300);  }}function cloudPushOnly(){  if(!CLOUD.on){ toast('先登录账号'); return; }  if(!confirm('把本机数据覆盖到云端（云端更新的记录会被覆盖）。确定？')) return;  cloudSync(false,'push');}function cloudPullOnly(){  if(!CLOUD.on){ toast('先登录账号'); return; }  cloudSync(false,'pull');}function cloudTouch(){  if(CLOUD.suppress || !CLOUD.on || !CLOUD.auto) return;  CLOUD.dirty=true;  if(CLOUD.timer) return;  CLOUD.timer=setTimeout(function(){    CLOUD.timer=null;    if(CLOUD.dirty) cloudSync(true);  }, 4000);}function cloudSetAuto(v){  const c=cloudCfg(); c.auto=v?1:0; cloudSetCfg(c); CLOUD.auto=!!v;  if(v && CLOUD.on){ cloudSync(true); toast('已开启自动同步'); }}/* --- 设置页渲染 --- */function renderAcc(){  const anon=document.getElementById('accAnon'), on=document.getElementById('accOn');  if(!anon||!on) return;  if(CLOUD.on){    anon.style.display='none'; on.style.display='block';    const em=document.getElementById('accEmail'); if(em) em.textContent=CLOUD.user||'已登录';    const st=document.getElementById('accLast');    if(st) st.textContent=CLOUD.busy?'同步中…':('上次同步：'+cloudTime(CLOUD.lastAt));    const box=document.getElementById('accAuto'); if(box) box.checked=!!CLOUD.auto;    const sv=document.getElementById('accSrv'); if(sv) sv.textContent='服务器：你的专属 Cloudflare Worker（ddddlyt.top）';  }else{    anon.style.display='block'; on.style.display='none';  }}
function toggleGhCard(){
  const el=document.getElementById('ghCard'); if(!el) return;
  el.style.display = (el.style.display==='none') ? 'block' : 'none';
}


/* ==================== 全屏图片查看器（题图 / 手写笔迹共用） ==================== */
var IMGV={scale:1, tx:0, ty:0, pinch:0, pd:0};
function imgvOpen(src, cap){
  var v=document.getElementById('imgv');
  document.getElementById('imgvImg').src=src;
  document.getElementById('imgvCap').textContent=cap||'双指缩放 · 双击放大';
  v.classList.add('on');
  imgvZoom(0);
  if(!v._bound){
    v._bound=true;
    imgvBind(document.getElementById('imgvImg'));
  }
}
function imgvClose(){ document.getElementById('imgv').classList.remove('on'); }
function imgvZoom(mode){
  IMGV.scale = mode===0 ? 1 : (IMGV.scale>=2.4 ? 1 : IMGV.scale+0.7);
  if(mode===0){ IMGV.tx=0; IMGV.ty=0; }
  imgvApply();
}
function imgvApply(){
  var im=document.getElementById('imgvImg');
  im.style.transform='translate('+IMGV.tx+'px,'+IMGV.ty+'px) scale('+IMGV.scale+')';
}
function imgvBind(el){
  var cx=0, cy=0, moved=false;
  el.addEventListener('dblclick', function(e){ e.preventDefault(); imgvZoom(1); });
  el.addEventListener('touchstart', function(e){
    if(e.touches.length===1){
      cx=e.touches[0].clientX; cy=e.touches[0].clientY; moved=false;
      IMGV.pinch=0;
    }else if(e.touches.length===2){
      IMGV.pinch=1;
      IMGV.pd=Math.hypot(e.touches[0].clientX-e.touches[1].clientX, e.touches[0].clientY-e.touches[1].clientY);
    }
  },{passive:true});
  el.addEventListener('touchmove', function(e){
    if(IMGV.pinch && e.touches.length===2){
      var d=Math.hypot(e.touches[0].clientX-e.touches[1].clientX, e.touches[0].clientY-e.touches[1].clientY);
      IMGV.scale=Math.min(5, Math.max(0.5, IMGV.scale * d/(IMGV.pd||d)));
      IMGV.pd=d; imgvApply();
    }else if(e.touches.length===1 && IMGV.scale>1){
      var nx=e.touches[0].clientX, ny=e.touches[0].clientY;
      IMGV.tx+=nx-cx; IMGV.ty+=ny-cy; cx=nx; cy=ny; moved=true;
      imgvApply();
    }
    if(IMGV.scale>1) e.preventDefault();
  },{passive:false});
  el.addEventListener('touchend', function(e){
    if(e.touches.length===0) IMGV.pinch=0;
  });
}
function imgFull(src, cap){ imgvOpen(src, cap); }

/* ==================== 启动 ==================== */
hwEnsure();
hwBind();
hwSyncBtns();
try{ hwRebuildThumbs(); }catch(e){}
document.addEventListener('visibilitychange', function(){
  if(document.visibilityState!=='visible' || GUEST) return;
  if(typeof CLOUD!=='undefined' && CLOUD && CLOUD.on && CLOUD.auto){
    if(Date.now()-(CLOUD.lastAt||0) > 60000) cloudSync(true);
  }
});
document.addEventListener('visibilitychange', function(){
  var hid = (document.visibilityState==='hidden');
  if(!hid || GUEST) return;
  if(typeof CLOUD!=='undefined' && CLOUD && CLOUD.on){
    if(CLOUD.dirty) cloudSync(true);
    return;
  }
  if(GH.dirty){ ghSync(true); }
});
setTimeout(function(){
  if(GUEST) return;
  cloudApplySession();
  if(CLOUD.on){
    if(CLOUD.auto) cloudSync(true);          /* 打开页面先拉一次，把另一台设备的进度合过来 */
  }else{
    var c=ghCfg();
    if(c.auto && c.token && c.repo){ ghSync(true); }
  }
}, 2500);
renderHome();

if('serviceWorker' in navigator && location.protocol==='https:'){
  try{ navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).then(function(reg){
    reg.update();
    reg.addEventListener('updatefound',function(){
      var nw=reg.installing; if(!nw) return;
      nw.addEventListener('statechange',function(){
        if(nw.state==='installed' && navigator.serviceWorker.controller){
          if(!sessionStorage.getItem('swReloaded')){
            sessionStorage.setItem('swReloaded','1');
            location.reload();
          }
        }
      });
    });
  }).catch(function(){}); }catch(e){}
  document.addEventListener('visibilitychange',function(){
    if(document.visibilityState==='visible' && navigator.serviceWorker.controller){
      navigator.serviceWorker.getRegistration().then(function(r){ if(r) r.update(); });
    }
  });
  window.addEventListener('load',function(){
    if(navigator.serviceWorker.controller && !sessionStorage.getItem('swReloaded')){
      navigator.serviceWorker.getRegistration().then(function(r){ if(r) r.update(); });
    }
  });
}


/* ================= v33 访问口令门 + 投稿箱 ================= */
/* ================= v37 账号门锁（替代旧访问口令门） ================= *//* 站点已被 Cloudflare Access 邮箱锁挡在门外（别人连页面都打不开）。   进门后这层负责：未登录就弹账号框，登录后隐藏，数据走你自己的 Worker。 */var GATE_CB=null;function gateShow(cb){  GATE_CB=cb||null;  var g=document.getElementById('gate'); if(!g) return;  g.style.display='flex';  document.body.style.overflow='hidden';  var u=document.getElementById('gateUser'), p=document.getElementById('gatePw');  var err=document.getElementById('gateErr'); if(err) err.textContent='';  if(u) u.value=''; if(p) p.value='';  setTimeout(function(){ if(u) u.focus(); else if(p) p.focus(); }, 60);}function gateHide(){  var g=document.getElementById('gate'); if(!g) return;  g.style.display='none';  document.body.style.overflow='';}function gateBoot(){  cloudApplySession();  renderAcc(); renderSubUI();  if(!CLOUD.on) gateShow();}document.addEventListener('keydown', function(e){  var g=document.getElementById('gate');  if(g && g.style.display!=='none' && e.key==='Enter'){    e.preventDefault();    cloudLogin();  }});

/* --- 投稿箱 --- */
var SUB={file:null};function subGo(){  go('set');  setTimeout(function(){    var el=document.getElementById('subCard');    if(el){ el.scrollIntoView({behavior:'smooth',block:'center'}); }  }, 250);}function subRefreshUI(){  var on=!!CLOUD.on;  var off=document.getElementById('subOff'); if(off) off.style.display=on?'none':'block';  var onEl=document.getElementById('subOn'); if(onEl) onEl.style.display=on?'block':'none';  if(on) subList();}function renderSubUI(){ subRefreshUI(); }function subPick(inp){  var f=inp.files&&inp.files[0];  if(!f) return;  if(f.size>4*1024*1024){    SUB.file=null; inp.value='';    document.getElementById('subFileInfo').textContent='⚠️ '+f.name+' 有 '+Math.round(f.size/1024/1024*10)/10+'MB，超过 4MB 了——照片可以在手机上先截个图或压缩一下再传';    return;  }  SUB.file={name:f.name, type:f.type||'application/octet-stream', size:f.size};  document.getElementById('subFileInfo').textContent='✅ 已选 '+f.name+'（'+Math.round(f.size/1024)+'KB）';  var rd=new FileReader();  rd.onload=function(){ SUB.file.data=rd.result; };  rd.readAsDataURL(f);}async function subSend(){  if(!SUB.file || !SUB.file.data){ toast('先选一个文件'); return; }  if(!CLOUD.on){ toast('先登录账号'); return; }  var btns=document.querySelectorAll('#subCard .mini-btn.blue');  btns.forEach(function(b){ b.disabled=true; });  try{    await apiReq('/sub', {method:'POST', body:JSON.stringify({      fname:SUB.file.name, ftype:SUB.file.type, fsize:SUB.file.size,      note:(document.getElementById('subNote').value||'').slice(0,100), content:SUB.file.data    })});    toast('投出去了✅ 站长收到会处理');    SUB.file=null;    document.getElementById('subFile').value='';    document.getElementById('subNote').value='';    document.getElementById('subFileInfo').textContent='还没选文件（支持照片、PDF、Word、压缩包等）';    subList();  }catch(e){ toast('投稿失败：'+apiErrText(e)); }  finally{ btns.forEach(function(b){ b.disabled=false; }); }}async function subList(){  var el=document.getElementById('subList'); if(!el) return;  if(!CLOUD.on){ el.innerHTML='<p class="gh-status">未登录</p>'; return; }  try{    var r=await apiReq('/sub'); var rows=r.items||[];    if(!rows.length){ el.innerHTML='<p class="gh-status">还没有投过，第一条放这儿</p>'; return; }    var h='';    for(var i=0;i<rows.length;i++){      var x=rows[i], d=new Date(x.at);      var ds=(d.getMonth()+1)+'/'+d.getDate()+' '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');      h+='<div class="sub-item"><span>📄</span><span class="sub-n">'+escA(x.fname)+'　'+esc(x.note||'')+'</span>'        +'<span class="sub-d">'+Math.round((x.fsize||0)/1024)+'KB · '+ds+'</span>'        +'<span class="hw-del" onclick="subDel(\''+x.id+'\')">删</span></div>';    }    el.innerHTML=h;  }catch(e){ el.innerHTML='<p class="gh-status">列表加载失败（'+esc(e.message||'')+'）</p>'; }}async function subDel(id){  if(!confirm('删掉这条投稿？')) return;  try{ await apiReq('/sub/'+id, {method:'DELETE'}); subList(); }catch(e){ toast('删除失败'); }}
/* 登录态变化时刷新投稿箱 UI（挂到原有的状态刷新点上） */
(function(){
  var orig=cloudStatus;
  window.cloudStatus=function(msg,cls){
    if(orig) orig(msg,cls);
    var off=document.getElementById('subOff');
    if(off){ /* 登录态可能已变化，轻量同步一次 */
      var on=!!CLOUD.on;
      var cur=off.style.display==='none';
      if(cur!==on) subRefreshUI();
    }
  };
})();
if(document.readyState==='complete'){ setTimeout(gateBoot,50); } else { window.addEventListener('load', function(){ setTimeout(gateBoot, 50); }); }
