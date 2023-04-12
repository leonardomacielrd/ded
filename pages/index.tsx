import Image from 'next/image'
import Grid from '@mui/material/Grid'
import styles from '../styles/Home.module.scss'
import Button from '../components/Button'

//import Paper from '@mui/material/Paper';

// const Item = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function Home() {
  return (
    <>
    {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>me ajude meu pai</p>
    </main> */}

    <header className={styles.header}>
    <Grid container alignItems="center" justifyContent="center">
      <Grid item>
        <Image
          src="/logo.png"
          alt="Cyberpunk 2077"
          className={styles.logo}
          width={210}
          height={24}
          priority
        />
      </Grid>
    </Grid>
    </header>
    <section className={styles.hero}>
    <Grid container direction="column" alignItems="center" justifyContent="center" alignContent="center">
      <Grid item>
        <Image
          src="/reborn.png"
          alt="Reborn"
          className={styles.logoreborn}
          width={220}
          height={24}
          priority
        />
        <Button/>
        <Image
          src="/consoles.png"
          alt="Disponível para PC, Playstation, XBox e Nintendo Wii"
          className={styles.consoles}
          width={220}
          height={24}
          priority
        />
      </Grid>
    </Grid>
    </section>
    <section className={styles.viva}>
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <h2>Viva o passado</h2>
      </Grid>
      <Grid item>
        <Grid container alignItems="center" justifyContent="center" className={styles.bloco}>
          <Grid item xs={12} md={4}>
            <p>Aproveite a chance de salvar sua vida, e veja de perto as maiores lendas de Night City!</p>
          </Grid>
          <Grid item xs={12} md={8}>
          <Image
            src="/viva-o-passado.png"
            alt="Viva o passado"
            className={styles.vivaimg}
            width={672}
            height={480}
            priority
          />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </section>
    <section className={styles.slider}>
      <h2>Personagens</h2>
      <div className={styles.slides}>
        
        <div id="slide-1">
          <div className={styles.item}>
            <Image
              src="/p_martinez.png"
              alt="David Martinez"
              className={styles.itemImg}
              width={458}
              height={280}
              priority
            />

            <h2 className={styles.name}>David Martinez</h2>
            <p className={styles.description}>A principal lenda surgida e morta em 2076. Extremamente relevante em seu combate contra Adam Smasher</p>
            <div className={styles.controls}>
              <a href="#slide-2" className={styles.next}></a>
            </div>
          </div>
        </div>
        <div id="slide-2">
          <div className={styles.item}>
            <Image
              src="/p_lucy.png"
              alt="Lucy"
              className={styles.itemImg}
              width={458}
              height={280}
              priority
            />

            <h2 className={styles.name}>Lucy</h2>
            <p className={styles.description}>Uma das melhores trilha redes da história, sendo a única sobrevivente de testes para aprimoramento de trilha redes da Arasaka. </p>
            <div className={styles.controls}>
              <a href="#slide-1" className={styles.prev}></a>
              <a href="#slide-3" className={styles.next}></a>
            </div>
          </div>
        </div>

        <div id="slide-3">
          <div className={styles.item}>
            <Image
              src="/p_pilar.png"
              alt="Pilar"
              className={styles.itemImg}
              width={458}
              height={280}
              priority
            />

            <h2 className={styles.name}>Pilar</h2>
            <p className={styles.description}>Antigo líder da cidade, irmão de Rebecca. Talvez dessa vez ele possa viver.</p>
            <div className={styles.controls}>
              <a href="#slide-2" className={styles.prev}></a>
              <a href="#slide-4" className={styles.next}></a>
            </div>
          </div>
        </div>

        <div id="slide-4">
          <div className={styles.item}>
            <Image
              src="/p_rebecca.png"
              alt="Rebecca"
              className={styles.itemImg}
              width={458}
              height={280}
              priority
            />

            <h2 className={styles.name}>Rebecca</h2>
            <p className={styles.description}>A expert em armas do grupo, tendo como a mais forte delas a sua coragem e loucura diante do combate.</p>
            <div className={styles.controls}>
              <a href="#slide-3" className={styles.prev}></a>
              <a href="#slide-5" className={styles.next}></a>
            </div>
          </div>
        </div>

        <div id="slide-5">
          <div className={styles.item}>
            <Image
              src="/p_maine.png"
              alt="Maine"
              className={styles.itemImg}
              width={458}
              height={280}
              priority
            />

            <h2 className={styles.name}>Maine</h2>
            <p className={styles.description}>Primeiro líder do grupo de David Martinez e seu principal mentor. Especialista em combate corpo a corpo.</p>
            <div className={styles.controls}>
              <a href="#slide-4" className={styles.prev}></a>
              <a href="#slide-6" className={styles.next}></a>
            </div>
          </div>
        </div>

        <div id="slide-6">
          <div className={styles.item}>
            <Image
              src="/p_falco.png"
              alt="Falco"
              className={styles.itemImg}
              width={458}
              height={280}
              priority
            />

            <h2 className={styles.name}>Falco</h2>
            <p className={styles.description}>Motorista do grupo, perito em fuga e perseguição, mais confiável que um delamain.</p>
            <div className={styles.controls}>
              <a href="#slide-5" className={styles.prev}></a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section className={styles.footer}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item>
          <Image
            src="/logo-real.png"
            alt="RE AL"
            className={styles.itemImg}
            width={50}
            height={30}
            priority
          />
        </Grid>
        <p> © EasyFake 2023</p>
      </Grid>
    </section>
    </>
  )
}
