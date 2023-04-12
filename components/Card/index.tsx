import Image from 'next/image'
import styles from './Card.module.scss'

const Card = ({imagem, nome, desc, antes, depois}: { imagem: string; nome: string; desc: string; antes: string; depois: string; }) => {
  
  return (
      <div className={styles.item}>
          <Image
              src={imagem}
              alt={nome}
              className={styles.itemImg}
              width={458}
              height={280}
              priority
          />

          <h2 className={styles.name}>{nome}</h2>
          <p className={styles.description}>{desc}</p>
          <div className={styles.controls}>
          {antes ? <a href={antes} className={styles.prev}></a> : null}
          {depois ? <a href={depois} className={styles.next}></a> : null}
          </div>
      </div>
  )
}

// const Card = ({ info }) => {
//     return (
//         <div className={styles.item}>
//             <Image
//               src={info.src}
//               alt={info.name}
//               className={styles.itemImg}
//               width={458}
//               height={280}
//               priority
//             />

//             <h2 className={styles.name}>{info.name}</h2>
//             <p className={styles.description}>{info.desc}</p>
//             <div className={styles.controls}>
//               <a href="#slide-{card.id}" className={styles.prev}></a>
//               <a href="#slide-{card.id +1}" className={styles.next}></a>
//             </div>
//         </div>
//     )
// };

export default Card;