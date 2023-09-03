import {BrowserRouter, Routes, Route} from "react-router-dom";
import SiswaList from "./components/RplList";
import AddSiswa from "./components/AddRpl";
import EditSiswa from "./components/EditRpl";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiswaList/>}/>
        <Route path="add" element={<AddSiswa/>}/>
        <Route path="edit/:id" element={<EditSiswa/>}/>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;