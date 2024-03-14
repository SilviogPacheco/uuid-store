import styles from "./Reviews.module.scss";
import { useDispatch } from "react-redux";
import { deleteComentario } from "../../../redux/actions";

const Review = ({ puntuaciones }) => {
  const dispatch = useDispatch();

  const deleteReview = (id, uuid) => {
    dispatch(deleteComentario({ id, uuid }));
  };

  return (
    <div className={styles.reviews}>
      {puntuaciones.map((review, index) => {
        return (
          <div className={styles.review} key={index}>
            <span
              onClick={() => deleteReview(review.productId, review.uuid)}
              className={styles.borrar}
            >
              Borrar
            </span>
            <h2>
              <strong>{review.usuario}</strong>
            </h2>
            <div>
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  className={`${styles.estrella} ${
                    value <= review.puntuacion
                      ? styles.estrellaA
                      : styles.estrellaN
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span>{review.comentario}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
