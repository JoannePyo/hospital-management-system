import * as sdk from "node-appwrite"; // Appwrite SDK를 가져옵니다. (npm install node-appwrite로 설치 필요)

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT, // 환경 변수에서 API 엔드포인트를 가져옵니다.
  PROJECT_ID, // 프로젝트 ID를 환경 변수에서 가져옵니다.
  API_KEY, // API 키를 환경 변수에서 가져옵니다.
  DATABASE_ID, // 데이터베이스 ID를 환경 변수에서 가져옵니다.
  PATIENT_COLLECTION_ID, // 환자 컬렉션 ID를 환경 변수에서 가져옵니다.
  DOCTOR_COLLECTION_ID, // 의사 컬렉션 ID를 환경 변수에서 가져옵니다.
  APPOINTMENT_COLLECTION_ID, // 예약 컬렉션 ID를 환경 변수에서 가져옵니다.
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID, // 버킷 ID를 환경 변수에서 가져옵니다.
} = process.env; // 모든 환경 변수를 한 번에 가져와서 변수에 할당합니다.

const client = new sdk.Client(); // 새로운 Appwrite 클라이언트 인스턴스를 생성합니다.

// 클라이언트에 엔드포인트, 프로젝트 ID 및 API 키를 설정합니다.
client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

// Appwrite 데이터베이스, 사용자, 메시징 및 스토리지 관련 기능을 사용할 수 있도록 인스턴스를 생성합니다.
export const databases = new sdk.Databases(client); // 데이터베이스 관련 API 인스턴스
export const users = new sdk.Users(client); // 사용자 관련 API 인스턴스
export const messaging = new sdk.Messaging(client); // 메시징 관련 API 인스턴스
export const storage = new sdk.Storage(client); // 스토리지 관련 API 인스턴스


/* 
SDK는 Software Development Kit의 약자로, 소프트웨어 개발을 위한 도구와 라이브러리의 모음입니다. 
SDK는 특정 플랫폼이나 서비스와 상호작용하기 위해 필요한 코드, API, 문서 및 샘플 코드를 포함하고 있습니다.
*/