/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from '/logo-by-tegar.png';

const SiswaList = () => {
  const [Siswa, setSiswa] = useState([]);
 
  useEffect(() => {
    getSiswa();
  }, []);
 
  const getSiswa = async () => {
    const response = await axios.get("http://localhost:5000/Siswa");
    setSiswa(response.data);
  };
 
  const deleteSiswa = async (SiswaId) => {
    try {
      await axios.delete(`http://localhost:5000/Siswa/${SiswaId}`);
      getSiswa();
    } catch (error) {
      console.log(error);
    }
  };
 
  return <>

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

    
      <div className="w-full my-5">
        <p className="font-semibold text-xl ">
          ini adalah contoh penggunaan Sistem CRUD dengan menggunakan nodeJS dan framework ExpressJS
        </p>
      </div>

      <div className="w-1/4 my-5">
        <p className="font-semibold text-xl bg-primary hover:bg-sky-300 rounded-e-full px-4 py-2">
          Data siswa XI Rpl 1
        </p>
      </div>


    
      <div className="flex flex-wrap w-full">
          {Siswa.map((Siswa) => (
            <div className="" key={Siswa.id}>

              <div className="ma px-6 py-6 bg-slate-300 hover:bg-slate-500 rounded-xl mb-10 mr-5 shadow-xl">
                  {/* <figure className="w-1/4"> */}
                    <img src={Siswa.url} alt="Image" className="w-20 hover:w-24" />
                  {/* </figure> */}
                  <div className="py-2">
                    <p className="font-bold text-xl hover:bg-slate-200 capitalize">{Siswa.name}</p>
                  </div>

                <footer className="">
                  <Link to={`edit/${Siswa.id}`} className="px-2 py-1 bg-green-600 hover:bg-green-400 hover:font-bold font-semibold text-sm mr-1">
                    Edit
                  </Link>
                  <a
                    onClick={() => deleteSiswa(Siswa.id)}
                    className="px-1 py-1 bg-red-600 hover:bg-red-400 hover:font-bold font-semibold text-sm"
                  >
                    Delete
                  </a>
                </footer>
              </div>
            </div>
          ))}
      </div>

    
      <Link to="/add">
        <div className="font-bold w-52 px-5 py-3 rounded-full bg-primary hover:bg-sky-300">
          Tambah data SISWA
        </div>
      </Link>
  </div>

  </>;
};
 
export default SiswaList;