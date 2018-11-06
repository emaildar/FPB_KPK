function fpb(angka1, angka2) { 
  return ( angka2 == 0 ) ? (angka1):( fpb(angka2, angka1 % angka2) ); 
}

function kpk(angka1, angka2) { 
  return ( angka1 / fpb(angka1,angka2) ) * angka2; 
}
hasil1 = fpb(3,2)
hasil2 = kpk(3,2)
console.log("FPB = " +  hasil1)
console.log("KPK = " +  hasil2)