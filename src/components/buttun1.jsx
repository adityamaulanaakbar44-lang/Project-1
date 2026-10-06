function Button1() {
 function tampilkanpesan() {
 alert("Button berhasil diklik");
 }
 return (
 <div>
 <h2>Belajar Event</h2>
 <button onClick={tampilkanpesan}>klik saya</button>
 </div>
 ); 
}
export default Button1;