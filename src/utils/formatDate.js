export const formatDate = (date) => {
    const event = new Date(date)

    // Objek ini merupakan parameter kedua dari toLocaleDateString
    // digunakan untuk mengkonvertnya menjadi sebuah data tanggal
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    // Parameter pertama artinya kita menggunakan bahasa inggris dalam penulisan tanggal
    // Parameter kedua artinya kita membuat variable yang berisi objek yang nantinya akan diconvert menjadi tanggal
    return event.toLocaleDateString('en-EN', options)
}