import './App.css';
import Home from './Secciones/Home/Home';

import Parte1 from "./Imagenes/Parte1.jpg";
import Parte2 from "./Imagenes/Parte2.jpg";
import Parte3 from "./Imagenes/Parte3.jpg";
import Parte4 from "./Imagenes/Parte4.jpg";
import Parte5 from "./Imagenes/Parte5.jpg";
import Parte6 from "./Imagenes/Parte6.jpg";
import Parte7 from "./Imagenes/Parte7.jpg";
import Parte8 from "./Imagenes/Parte8.jpg";

const Modelos = [
  {
      id: 1,
      name: "Corolla",
      segment: "Sedan",
      year: 2021,
      price: 3817000.0,
      thumbnail: "http://challenge.agenciaego.tech/media/images/corolla_plata_metalico.width-300.png",
      photo: "http://challenge.agenciaego.tech/media/images/corolla_plata_metalico.width-600.png",
  },
  {
      id: 2,
      name: "Camry",
      segment: "Sedan",
      year: 2021,
      price: 4250400.0,
      thumbnail: "http://challenge.agenciaego.tech/media/images/CAMRY-V6_LAT-Negro.width-300.png",
      photo: "http://challenge.agenciaego.tech/media/images/CAMRY-V6_LAT-Negro.width-600.png"
  },
  {
      id: 3,
      name: "Yaris Hatchback",
      segment: "Hatchback",
      year: 2021,
      price: 2585000.0,
      thumbnail: "http://challenge.agenciaego.tech/media/images/YarisHB_Rojo_res.width-300.png",
      photo: "http://challenge.agenciaego.tech/media/images/YarisHB_Rojo_res.width-600.png"
  },
  {
      id: 4,
      name: "Etios",
      segment: "Hatchback",
      year: 2021,
      price: 1731000.0,
      thumbnail: "http://challenge.agenciaego.tech/media/images/709000-1619455628_320.width-300.png",
      photo: "http://challenge.agenciaego.tech/media/images/709000-1619455628_320.width-600.png"
  },
  {
      id: 5,
      name: "Hilux",
      segment: "Pickups y Comerciales",
      year: 2021,
      price: 3410000.0,
      thumbnail: "http://challenge.agenciaego.tech/media/images/2021061900171062_PostTonemapHDRColor-03.width-300.png",
      photo: "http://challenge.agenciaego.tech/media/images/2021061900171062_PostTonemapHDRColor-03.width-600.png"
  },
  {
      id: 6,
      name: "Hiace Furgón",
      segment: "Pickups y Comerciales",
      year: 2021,
      price: 3645200.0,
      thumbnail: "http://challenge.agenciaego.tech/media/images/HIAC1812-1002_LAT_BLANCO.width-300.png",
      photo: "http://challenge.agenciaego.tech/media/images/HIAC1812-1002_LAT_BLANCO.width-600.png"
  },
  {
      id: 7,
      name: "Rav4",
      segment: "SUVs",
      year: 2021,
      price: 2960500.0,
      thumbnail: "http://challenge.agenciaego.tech/media/images/RAV4_AWD_LIMITED__HV_LAT_azul_marino_mica_resi.width-300.png",
      photo: "http://challenge.agenciaego.tech/media/images/RAV4_AWD_LIMITED__HV_LAT_azul_marino_mica_resi.width-600.png"
  },
  {
      id: 8,
      name: "SW4",
      segment: "SUVs",
      year: 2021,
      price: 6892000.0,
      thumbnail: "http://challenge.agenciaego.tech/media/images/10-2020122300452140_090_PostTonemapHDRColor.width-300.png",
      photo: "http://challenge.agenciaego.tech/media/images/10-2020122300452140_090_PostTonemapHDRColor.width-600.png"
  }
]

const ItemsPartes = [
  {
      id: 1,
      titulo: "Motores",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      photo: Parte1,
  },
  {
      id: 2,
      titulo: "Suspencion Mejorada",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      photo: Parte2,
  },
  {
      id: 3,
      titulo: "Transmisíon automática",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      photo: Parte3,
  },
  {
      id: 4,
      titulo: "Transmisíon manual",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      photo: Parte4, 
  },
  {
      id: 5,
      titulo: "Transmisíon asistida",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      photo: Parte5,
  },
  {
      id: 6,
      titulo: "Traccion tracera",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      photo: Parte6, 
  },
  {
      id: 7,
      titulo: "Traccion delantera",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      photo: Parte7,
  },
  {
      id: 8,
      titulo: "Sistema de frenos",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      photo: Parte8,
  }
]

function App() {
  return (
    <div className="App">
      <Home Modelos={Modelos} ItemsPartes={ItemsPartes} />
    </div>
  );
}

export default App;
