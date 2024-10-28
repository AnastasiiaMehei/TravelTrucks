// import css from './CamperDetails.module.css';

// export default function CamperDetails({ camper }) {
//   const { name, price, rating, location, description, gallery, form, length, width, height, tank, consumption, transmission, engine, AC, bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water } = camper;

//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>{name}</h1>
//       <div className={css.gallery}>
//         {gallery.map((image, index) => (
//           <img key={index} src={image.thumb} alt={`Camper ${name} image ${index + 1}`} />
//         ))}
//       </div>
//       <div className={css.info}>
//         <p className={css.price}>Price: ${price}</p>
//         <p className={css.rating}>Rating: {rating}</p>
//         <p className={css.location}>Location: {location}</p>
//         <p className={css.description}>{description}</p>
//         <h2 className={css.sectionTitle}>Characteristics:</h2>
//         <ul className={css.characteristics}>
//           {transmission && <li>Transmission: {transmission}</li>}
//           {engine && <li>Engine: {engine}</li>}
//           {AC && <li>AC: Yes</li>}
//           {bathroom && <li>Bathroom: Yes</li>}
//           {kitchen && <li>Kitchen: Yes</li>}
//           {TV && <li>TV: Yes</li>}
//           {radio && <li>Radio: Yes</li>}
//           {refrigerator && <li>Refrigerator: Yes</li>}
//           {microwave && <li>Microwave: Yes</li>}
//           {gas && <li>Gas: Yes</li>}
//           {water && <li>Water: Yes</li>}
//         </ul>
//         <h2 className={css.sectionTitle}>Details:</h2>
//         <ul className={css.details}>
//           {form && <li>Form: {form}</li>}
//           {length && <li>Length: {length}</li>}
//           {width && <li>Width: {width}</li>}
//           {height && <li>Height: {height}</li>}
//           {tank && <li>Tank: {tank}</li>}
//           {consumption && <li>Consumption: {consumption}</li>}
//         </ul>
//       </div>
//       <div className={css.reviews}>
//         <h2 className={css.sectionTitle}>Reviews:</h2>
//         {/* Додайте логіку для відображення відгуків користувачів */}
//       </div>
//       <form className={css.bookingForm}>
//         <h2 className={css.sectionTitle}>Book this camper:</h2>
//         {/* Додайте поля форми для бронювання */}
//       </form>
//     </div>
//   );
// }