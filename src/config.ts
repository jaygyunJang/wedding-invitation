export const weddingConfig = {
  groom: {
    name: '김신랑',
    englishName: 'Groom',
    father: '김아버지',
    mother: '이어머니',
    fatherDeceased: false,
    motherDeceased: false,
    phone: '010-0000-0000',
  },
  bride: {
    name: '이신부',
    englishName: 'Bride',
    father: '이아버지',
    mother: '박어머니',
    fatherDeceased: false,
    motherDeceased: false,
    phone: '010-0000-0000',
  },
  mainPhoto: 'https://picsum.photos/seed/wedding-main/600/800',
  date: '2026-10-10T12:00:00',
  greeting: {
    title: '결혼합니다',
    message:
      '서로 다른 두 사람이 만나\n사랑으로 하나가 되려 합니다.\n\n저희 두 사람이 사랑의 이름으로\n지은 집에 함께 하시어\n축복해 주시면 감사하겠습니다.',
  },
  location: {
    name: '더채플앳청담',
    hall: '그랜드볼룸 3층',
    address: '서울특별시 강남구 청담동 123-45',
    roadAddress: '서울특별시 강남구 선릉로 000길 00',
    mapImageUrl: '',
    naverMapUrl: 'https://map.naver.com',
    kakaoMapUrl: 'https://map.kakao.com',
    tmapUrl: 'https://tmap.life',
    transport: [
      { type: '지하철', detail: '7호선 청담역 1번 출구에서 도보 5분' },
      { type: '버스', detail: '간선 143, 240 / 지선 3011, 4211' },
      { type: '주차', detail: '건물 내 지하주차장 이용 가능 (2시간 무료)' },
    ],
  },
  accounts: {
    groom: [
      { bank: '국민은행', number: '000-000-00-000000', holder: '김신랑' },
      { bank: '신한은행', number: '000-000-000000', holder: '김아버지' },
      { bank: '우리은행', number: '000-000-000000', holder: '이어머니' },
    ],
    bride: [
      { bank: '카카오뱅크', number: '0000-00-0000000', holder: '이신부' },
      { bank: '하나은행', number: '000-000000-00000', holder: '이아버지' },
      { bank: '농협은행', number: '000-0000-0000-00', holder: '박어머니' },
    ],
  },
  gallery: [
    'https://picsum.photos/seed/wedding1/600/800',
    'https://picsum.photos/seed/wedding2/600/800',
    'https://picsum.photos/seed/wedding3/600/800',
    'https://picsum.photos/seed/wedding4/600/800',
    'https://picsum.photos/seed/wedding5/600/800',
    'https://picsum.photos/seed/wedding6/600/800',
  ],
}
