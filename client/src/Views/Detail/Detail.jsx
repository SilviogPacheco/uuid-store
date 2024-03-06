import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux"; // Cambiado a useDispatch

import ProductReview from "../../components/ProductReview/ProductReview";

import { getDetail, clearDetail, addToCart } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";

import "react-image-gallery/styles/css/image-gallery.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch(); // Cambiado a useDispatch
  const detail = useSelector((state) => state.detail);



  const [image, setImage] = useState(1);
  const images = [
    "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600", // URL de la primera imagen
    "https://images.pexels.com/photos/1461048/pexels-photo-1461048.jpeg?auto=compress&cs=tinysrgb&w=600", // URL de la segunda imagen
    "https://images.pexels.com/photos/11135667/pexels-photo-11135667.jpeg?auto=compress&cs=tinysrgb&w=600", // URL de la tercera imagen
    "https://images.pexels.com/photos/11135667/pexels-photo-11135667.jpeg?auto=compress&cs=tinysrgb&w=600", // URL de la cuarta imagen
  ];
  const changeImage = (i) => {
    setImage(i);
  };

  useEffect(() => {
    dispatch(getDetail(id));
    return () => dispatch(clearDetail());
  }, [dispatch, id]);

  const handleTalle = (event) => {
    setTalleSeleccionado(event.target.value);
  };
  // const handleTalle = (event) => {
  //   setTalleSeleccionado(event.target.value);
  // }



  const [tallaSeleccionada, setTallaSeleccionada] = useState(null);
  const handleSeleccionarTalla = (talla) => {
    setTallaSeleccionada(talla === tallaSeleccionada ? null : talla);
  };

  // --------estrellas
  // const [rating, setRating] = useState(0);

  // const handleRating = (value) => {
  //   setRating(value);
    
  //   console.log(`Calificación: ${value}`);
  // };


  const handleAddToCart = () => {

    if (tallaSeleccionada) {
      if (tallaSeleccionada && tallaSeleccionada !== "sinStock") {
        const uuid = uuidv4();
        dispatch(addToCart({ ...detail, talle: tallaSeleccionada, uuid: uuid }));
      }

    }
  };
    return (
      <div className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <Link to="/" className="hover:underline hover:text-gray-600">
              Inicio
            </Link>
            <span>
              <svg
                className="h-5 w-5 leading-none text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <a href="#" className="hover:underline hover:text-gray-600">
              {detail?.marca}
            </a>
            <span>
              <svg
                className="h-5 w-5 leading-none text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <span>{detail?.nombre}</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div
                className={`h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center`}
              >
                {detail.imagen ? (
                  <img
                    src={detail.imagen[image - 1]}
                    alt={`Imagen ${image}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={images[image - 1]}
                    alt={`Imagen ${image}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="flex -mx-2 mb-4">
                {(detail.imagen || images).map((img, i) => (
                  <div key={i} className="flex-1 px-2">
                    <button
                      onClick={() => changeImage(i + 1)}
                      className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${image === i + 1 ? "ring-2 ring-indigo-300 ring-inset" : ""
                        }`}
                    >
                      <img
                        src={img}
                        alt={`Miniatura ${i + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                {detail?.nombre}
                {/* <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleRating(value)}
                      className={`focus:outline-none ${value <= rating ? 'text-yellow-500' : 'text-gray-300'} text-3xl`}
                    >
                      
                      {value <= rating ? '\u2605' : '\u2606'}
                    </button>
                  ))}
                </div> */}
              </h2>
              <p className="text-gray-500 text-sm">
                Por{" "}
                <a href="#" className="text-red-500 hover:underline">
                  {detail?.marca}
                </a>
              </p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="text-red-500 mr-1 mt-1">$</span>
                    <span className="font-bold text-red-500 text-3xl">
                      {detail?.precio}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">
                    Ahorra 12%
                  </p>
                  <p className="text-gray-400 text-sm">
                    Incluye todos los impuestos.
                  </p>
                </div>
              </div>
      
              <p className="text-gray-500">
                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
                exercitationem porro saepe ea harum corrupti vero id laudantium
                enim, libero blanditiis expedita cupiditate a est.
              </p>

              <div>
                <p><b>Selecciona tu talla:</b></p>
                <div className="flex-wrap space-x-2">
                  {typeof detail.stock === "object" ? (
                    Object.entries(detail.stock).filter(([_, cantidad]) => cantidad > 0).length > 0 ? (
                      Object.entries(detail.stock)
                        .filter(([_, cantidad]) => cantidad > 0)
                        .map(([talle], index) => (
                          <button
                            key={index}
                            className={`py-2 px-4 m-1 focus:outline-none border border-gray-300 rounded-md transition duration-300 ease-in-out ${talle === tallaSeleccionada
                              ? 'bg-blue-500 text-white'
                              : 'bg-transparent text-gray-700 hover:bg-gray-200'
                              }`}
                            onClick={() => handleSeleccionarTalla(talle)}
                          >
                            {talle}
                          </button>
                        ))
                    ) : (
                      <button
                        className="py-2 px-4 border border-gray-300 text-gray-700 rounded-md cursor-not-allowed opacity-50"
                        disabled
                      >
                        SIN STOCK
                      </button>
                    )
                  ) : (
                    <button
                      className="py-2 px-4 border border-red-500 text-red-500 rounded-md cursor-not-allowed opacity-50"
                      disabled
                    >
                      Error en cargar el stock
                    </button>
                  )}
                </div>



                {tallaSeleccionada && (
                  <p>Talla seleccionada: {tallaSeleccionada}</p>
                )}
              </div>

              <div className="flex py-4 space-x-4">
                <div className="relative">
       


                </div>

                <button
                  type="button"
                  className="h-14 px-6 py-2 font-semibold rounded-xl bg-red-500 hover:bg-red-400 text-white"
                  onClick={handleAddToCart}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
        <ProductReview ></ProductReview>
      </div>
    );
  };


export default Detail;
