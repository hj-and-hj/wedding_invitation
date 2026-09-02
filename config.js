/**
 * Midnight Navy Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김희중",
    nameEn: "Kim Heejung",
    father: "김동년",
    mother: "박향미",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김혜주",
    nameEn: "Kim Hyeju",
    father: "김찬호",
    mother: "이현미",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-31",
    time: "16:30",
    venue: "마이어스 수원",
    hall: "그레이스 홀",
    address: "경기 수원시 권선구 경수대로 270",
    tel: "0507-1402-5500"
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "저희를 소개합니다",
    content: "",
    people: {
      groom: {
        name: "김희중",
        phone: "010-3915-4536",
        intro: "ISTP 곰돌이푸\n연구원 포근하고 깊은 사람",
        image: "images/hero/kid_heejung.jpg"
      },
      bride: {
        name: "김혜주",
        phone: "010-3225-5633",
        intro: "ENFJ 조잘조잘 오리\n초등교사 밝고 따뜻한 사람",
        image: "images/hero/kid_hyeju.jpg"
      }
    }
  },

  // ── 오시는 길 ──
  mapLinks: {
    kakao: "https://kko.to/AUtMrc6zqm",
    naver: "https://naver.me/FethWOrt"
  },

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김희중", bank: "우리은행", number: "1002-750-726027" },
      { role: "아버지", name: "김동년", bank: "신협", number: "132-022-579212" }
    ],
    bride: [
      { role: "신부", name: "김혜주", bank: "카카오뱅크", number: "3333-0433-20134" },
      { role: "아버지", name: "김찬호", bank: "하나은행", number: "2278-9042-0065-07" },
      { role: "어머니", name: "이현미", bank: "신한은행", number: "110-047-797420" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김희중 ♥ 김혜주 결혼합니다",
    description: "2026년 10월 31일, 소중한 분들을 초대합니다."
  }
};
