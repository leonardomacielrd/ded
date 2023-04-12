import Image from 'next/image'
import Grid from '@mui/material/Grid'
import styles from '../styles/Home.module.scss'
import Button from '../components/Button'
import Card from '../components/Card'


export default function Home() {
  return (
    <>
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
          <Card 
            imagem={'/p_martinez.png'} 
            nome={'David Martinez'} 
            desc={'A principal lenda surgida e morta em 2076. Extremamente relevante em seu combate contra Adam Smasher'}
            antes={''}
            depois={'#slide-2'}
          />
        </div>

        <div id="slide-2">
        <Card 
            imagem={'/p_lucy.png'} 
            nome={'Lucy'} 
            desc={'Uma das melhores trilha redes da história, sendo a única sobrevivente de testes para aprimoramento de trilha redes da Arasaka.'} 
            antes={'#slide-1'}
            depois={'#slide-3'}
          />
        </div>

        <div id="slide-3">
        <Card 
            imagem={'/p_pilar.png'} 
            nome={'Pilar'} 
            desc={'Antigo líder da cidade, irmão de Rebecca. Talvez dessa vez ele possa viver.'}
            antes={'#slide-2'}
            depois={'#slide-4'}
          />
        </div>
        
        <div id="slide-4">
        <Card 
            imagem={'/p_rebecca.png'} 
            nome={'Rebecca'} 
            desc={'A expert em armas do grupo, tendo como a mais forte delas a sua coragem e loucura diante do combate.'}
            antes={'#slide-3'}
            depois={'#slide-5'}
          />
        </div>

        <div id="slide-5">
        <Card 
            imagem={'/p_maine.png'} 
            nome={'Maine'} 
            desc={'Primeiro líder do grupo de David Martinez e seu principal mentor. Especialista em combate corpo a corpo.'} 
            antes={'#slide-4'}
            depois={'#slide-6'}
          />
        </div>

        <div id="slide-6">
        <Card 
            imagem={'/p_falco.png'} 
            nome={'Falco'} 
            desc={'Motorista do grupo, perito em fuga e perseguição, mais confiável que um delamain.'}
            antes={'#slide-1'}
            depois={''}
          />
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
