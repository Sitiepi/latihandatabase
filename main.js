// menambah library firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'

// menambah/mengimfor Library firestore
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    updateDoc,
    query,
    orderBy
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js'

// menambah konfigurasi
const firebaseConfig = {
    apiKey: "AIzaSyDgGanI0xfwbMbF2Q20eftio7Hc6iyPVgI",
    authDomain: "insancemerlang-e9c87.firebaseapp.com",
    projectId: "insancemerlang-e9c87",
    storageBucket: "insancemerlang-e9c87.firebasestorage.app",
    messagingSenderId: "1009245252263",
    appId: "1:1009245252263:web:637bfe528eddfc0dc18982"
};


// inisialisasi firebase
const app = initializeApp(firebaseConfig);

// inisialisasi firestore
const db = getFirestore(app)


// fungsi untuk menyimpan data ke firebase
export async function tambahData() {
    try {
        // menyimpan data ke firestore
        const referensiDokumen = await addDoc(collection(db, "siswa"),
        {
            nama: 'Agus',
            kelas: 'XI RPL'
        })
        
        // menampilkan pesan berhasil
        console.log('Berhasil menambah data siswa')
    } catch (error) {
        // menampilkan pesan error
        console.log(error)
    }
}

//fungsi untuk mengambil data siswa dari firestore
export async function daftarSiswa() {
    //refrensi ke daftar dokumen siswa
    const refDokumen = collection(db,"siswa")
    
    //melakukan permintaan atau query ke referensi daftar dokumen
    const kueri = query(refDokumen,orderBy("nama"))
    
    // menampung data cuplikan kueri
    const cuplikanKueri = await getDocs(kueri)
    
    //tampung hasil kueri
    let hasilKueri = []
    
    //loop cuplikan kueri, simpan ke variabel hasil kueri
    cuplikanKueri.forEach((dokumen) => {
        hasilKueri.push({
            nama: dokumen.data().nama,
            kelas: dokumen.data().kelas
            
        })
    })
    
    //kembalikan nilai daftar siswa ke pemanggil fungsi
    return hasilKueri
}