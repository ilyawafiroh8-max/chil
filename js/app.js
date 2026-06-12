
function show(id){document.getElementById(id).classList.remove('hidden');}
function nextService(){show('service');}
function serviceChange(){
let v=layanan.value;
dokterBox.classList.toggle('hidden',v!=='dokter');
periksaBox.classList.toggle('hidden',v==='dokter');
}
function registerPatient(){
let data=JSON.parse(localStorage.getItem('patients')||'[]');
let tests=[];document.querySelectorAll('input[type=checkbox]:checked').forEach(x=>tests.push(x.value));
let rec={reg:'CCL-'+Date.now(),nama:nama.value,nik:nik.value,hp:hp.value,jk:jk.value,alamat:alamat.value,layanan:layanan.value,dokter:(dokterBox.classList.contains('hidden')?'':dokter.value),tests:tests.join(';'),tanggal:new Date().toLocaleDateString()};
data.push(rec);localStorage.setItem('patients',JSON.stringify(data));
ticket.classList.remove('hidden');
ticket.innerHTML='<h2>Tiket</h2>No Reg:'+rec.reg+'<br>Nama:'+rec.nama+'<br>Layanan:'+rec.layanan+'<br>Pemeriksaan:'+rec.tests+'<br><button onclick="window.print()">Cetak PDF</button>';
}
function login(){if(u.value==='chilyalab'&&p.value==='060120'){show('admin')}else alert('Username atau Password salah');}
function loadPatients(){out.textContent=JSON.stringify(JSON.parse(localStorage.getItem('patients')||'[]'),null,2);}
function daily(){let a=JSON.parse(localStorage.getItem('patients')||'[]');out.textContent='Total pasien: '+a.length;}
function monthly(){let a=JSON.parse(localStorage.getItem('patients')||'[]');out.textContent='Total pasien bulan ini: '+a.length;}
function csvExport(){let a=JSON.parse(localStorage.getItem('patients')||'[]');let c='NoReg,Nama,NIK,HP,Layanan,Tanggal\n';a.forEach(x=>c+=`${x.reg},${x.nama},${x.nik},${x.hp},${x.layanan},${x.tanggal}\n`);let l=document.createElement('a');l.href=URL.createObjectURL(new Blob([c]));l.download='rekap.csv';l.click();}
