import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {defineOrientation} from '../components/DefineOrientation';
import {getUserProfile} from '../components/APICalls';
import {getToken} from '../components/AsyncStorage';

const Home = ({navigation}) => {
  const [user, setUser] = useState({});

  const orientation = defineOrientation();
  const images = [
    'https://croatiabus.hr/content/574546407180b.jpg',
    'https://www.pmfst.unist.hr/wp-content/uploads/2018/02/pmf-020.jpg',
    'https://www.srednja.hr/app/uploads/2020/02/leap1-1024x493.jpg',
  ];

  useEffect(() => {
    getToken().then(token => {
      console.log(token);
      getUserProfile(token).then(res => {
        if (res.status) {
          navigation.navigate('Login');
        }
        if (res.user) {
          setUser(res.user);
        }
      });
    });
  }, []);

  console.log(user);
  return (
    <View
      style={
        orientation.isLandscape ? landscape.container : portrait.container
      }>
      <View style={styles.slider}>
        <SliderBox
          images={images}
          sliderBoxHeight={300}
          parentWidth={
            orientation.isLandscape
              ? orientation.width * 0.49
              : orientation.width
          }
          dotColor="rgb(51, 153, 255)"
          inactiveDotColor="#90A4AE"
          paginationBoxStyle={{
            flex: 1,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 15,
            marginHorizontal: 10,
            padding: 0,
            margin: 0,
          }}
        />
      </View>
      <View style={styles.news}>
        <ScrollView>
          <View style={styles.title}>
            <Image
              source={require('../pictures/info.png')}
              style={{
                tintColor: 'rgb(191, 112, 95)',
              }}
            />
            <Text style={styles.titleText}>ABOUT</Text>
          </View>
          <Text
            style={[
              styles.plainText,
              {backgroundColor: 'rgba(191, 112, 95, 0.7)'},
            ]}>
            Hrvatski matematički kongres se održava svake četvrte godine i
            središnji je matematički događaj u Republici Hrvatskoj u tom
            razdoblju. Prvenstvena svrha jest okupiti domaće znanstvenike, kao i
            one iz dijaspore, da na Kongresu izlože svoje najnovije rezultate te
            diskutiraju i razmijene ideje iz različitih područja teorijske i
            primijenjene matematike. Osim hrvatskih znanstvenika, kroz plenarna,
            pozvana, sekcijska predavanja te postersku sekciju, svoje najnovije
            rezultate predstavljaju i ugledni strani znanstvenici s poznatih
            svjetskih sveučilišta. {'\n\n'}U sklopu znanstvenoga programa
            predviđeno je i predavanje dobitnika Nagrade Hrvatskoga matematičkog
            društva “Ante Mimica” za znanstveni doprinos u matematici koja se
            dodjeljuje svake četvrte godine mladom matematičaru (do 35 godina
            starosti) sa stalnim boravištem u Republici Hrvatskoj.
          </Text>
          <View style={styles.title}>
            <Image
              source={require('../pictures/excursion.png')}
              style={{
                tintColor: 'rgb(191, 160, 95)',
              }}
            />
            <Text style={styles.titleText}>
              KONGRESNI IZLET: POLJICA I OMIŠ
            </Text>
          </View>
          <Text
            style={[
              styles.plainText,
              {backgroundColor: 'rgba(191, 160, 95, 0.7)'},
            ]}>
            Izlet u Poljica i Omiš je planiran za četvrtak (18. lipnja 2020.) u
            popodnevnim satima. Okvirni plan: Polazak iz Splita poslije ručka.
            Vožnja autobusom do Gata. Upoznavanje s poviješću Poljičke republike
            i razgledavanje Muzeja poljica. Odlazak do crkvice sv. Jure i
            vidikovca, degustacija poljičkog soparnika. U dogovoreno vrijeme
            polazak za Omiš. Vožnja brodicom od Omiša do Radmanovih mlinica kroz
            kanjon Cetine. Po dolasku u Radmanove milnice predviđena je zakuska
            (domaći specijaliteti: pršut, sir, masline,…). Povratak autobusom u
            Omiš. Obilazak grada Omiša u pratnji lokalnog vodiča. Povratak u
            Split u večernjim satima.
          </Text>
          <View style={styles.title}>
            <Image
              source={require('../pictures/dinner.png')}
              style={{
                tintColor: 'rgb(174, 191, 95)',
              }}
            />
            <Text style={styles.titleText}>KONGRESNI BANKET</Text>
          </View>
          <Text
            style={[
              styles.plainText,
              {backgroundColor: 'rgba(174, 191, 95, 0.7)'},
            ]}>
            Kongresni banket je planiran za petak (19. lipnja. 2020.) u
            večernjim satima. Prije banketa predviđeno je razgledavanje stare
            splitske gradske jezgre u pratnji lokalnog vodiča.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  news: {
    flex: 1,
    marginHorizontal: 5,
  },
  title: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  titleText: {
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
  plainText: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
  },
});

const landscape = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
  },
});

const portrait = StyleSheet.create({
  container: {
    flex: 1,
  },
});
