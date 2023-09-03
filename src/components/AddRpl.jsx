/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from '/logo-by-tegar.png';
 
const AddSiswa = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();
 
  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };
 
  const saveSiswa = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    try {
      await axios.post("http://localhost:5000/Siswa", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <>

      <div className="w-3/5 m-auto">

      <div className="flex flex-row justify-between items-center px-4 py-2 bg-slate-500">
          <div className="w-10 hover:w-12">
            <img src={logo} alt="logoByTegar" />
          </div>

          <div className="font-semibold text-xl capitalize hover:text-white">
            rekayasa perangkat lunak
          </div>

          <div className="font-semibold text-xl hover:text-white">
            Projek Magang
          </div>
      </div>

      <div className="mt-10">
        <form onSubmit={saveSiswa}>
            <label className="font-semibold text-xl">Siswa Name</label><br />
              <input
                type="text"
                className="pr-10 pl-2 py-2 mt-3 border-2 border-black text-black"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nama Siswa"
              /> <br />
            <div className="mt-3">
              <label className="font-semibold text-xl">Pilih Gambar</label><br />
            </div>
            <div className="mt-3">
                <label className="font-semibold text-lg mt-3">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                </label>
            </div>
                
          {preview ? (
            <figure className="w-40 hover:w-44 mt-3">
              <img src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}
 
            <div className="control">
              <button type="submit" className="font-bold text-lg mt-5 w-52 px-5 py-3 rounded-full bg-primary hover:bg-sky-300">
                Save
              </button>
            </div>
        </form>
      </div>


      </div>
      
    </>
  );
};
 
export default AddSiswa;