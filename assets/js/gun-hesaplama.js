let sayi = Number(prompt('1-7 arasında bir sayı söyle, denk gelen günü söyleyeyim.'));
let günAdi;

switch(sayi) {
  case 1 :
    günAdi = 'Pazartesi'
    break;
  case 2 :
    günAdi = 'Salı'
    break;
  case 3 :
    günAdi = 'Çarşamba'
    break;
  case 4 :
    günAdi = 'Perşembe'
    break;
  case 5 :
    günAdi = 'Cuma'
    break;
  case 6 :
    günAdi = 'Cumartesi'
    break;
  case 7 :
    günAdi = 'Pazar'
    break;
  default :
    günAdi = 'Gün bulunamadı.'
}

alert(günAdi);