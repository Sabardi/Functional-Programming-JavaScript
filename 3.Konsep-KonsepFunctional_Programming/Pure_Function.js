let PI = 3.14;

const Hitung_luas_lingkaran = (jarijari) =>{
    return PI * (jarijari * jarijari)
}

console.log(Hitung_luas_lingkaran(4))
PI = 5 //ketika nilai tidak sengaja berubah
console.log(Hitung_luas_lingkaran(4))

// cara membuat fugsi nya menjadi menjadi pure

const Hitung_luas_lingkarans = (jarijari = 4) =>{
    return 3.14 * (jarijari * jarijari)
}

console.log(Hitung_luas_lingkarans())//tampa mengembalikan nilai
console.log(Hitung_luas_lingkarans())
console.log(Hitung_luas_lingkarans(8))
console.log(Hitung_luas_lingkarans(8))

// pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja
console.log("///////////////////")
const createPersonWithAge = ( age, person )=>{ 
    /**
     * Fungsi createPersonWithAge bertujuan untuk membuat objek person baru dengan tambahan properti age dari objek person yang ada. Namun alih-alih hanya membuat objek baru, ia juga malah mengubah nilai dari objek lama. Nah,
     *  hal inilah yang menyebabkan fungsi createPersonWithAge bukanlah pure function.
     */
    person.age = age
    return person
}
const person ={
    nama: 'ilham'
}
const newperson = createPersonWithAge(18, person);

console.log({
    person, 
    newperson
})

// cara membuat fungsi tersebut menjadi pure
console.log("//////////////")
const createPersonWithAge1 = (age,person)=>{
    return {...person, age}
}
const person1 ={
    nama: 'ilham',
    alamat: "bagu"
}
const newperson1 = createPersonWithAge(18, person1);

console.log({
    person1,
    newperson1
})

/**
 * Agar lebih mudah dalam mengetahui apakah fungsi yang Anda buat sudah pure atau belum, pastikan 3 konsep ini ada pada fungsi yang Anda buat.

1. Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
2. Hanya bergantung pada argumen yang diberikan.
3. Tidak menimbulkan efek samping.
 */