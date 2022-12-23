// firebase import
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// const serviceAccount = require('./map-tester-356704-58629fc24471.json');

initializeApp({
  credential: cert({
    "type": "service_account",
    "project_id": "map-tester-356704",
    "private_key_id": "58629fc24471ab4ff649fdf5a17c65f9c318a241",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDFPZKjsR+zNImu\nqHuN+65XMyFRpMYGcpzEhvWaonq9t/h1nhgjI1KNivYSC0kZgu3eSFed3Y4jreA8\naqT7vMgDdc9RDF9pZ9Nqk05XI4oYF4qOPLEwsjypXfJtdGkcBjJjaq9TGyGekOGd\nYoxaL9skIbmBQNNxOwC8Jj1oEjHhF99VNQ76vYeXx4hE754Apz3S8LyWX830A5Q1\nuac8d+dgDjby61x4wJsCFnvaPboN8Bm2ly+fFNhjJ96PUhixodOQ0MShcG6u5GlI\n7RUWB7Nutu8IoaUTtx3fbVGwL/worGEZAX9TsBR2SVi1do7gv+On+NfRxazlB0a6\nSa58aRrJAgMBAAECggEAQRCNtgfw8BnNrVsQ3wZ+PW+1dwxG8suOIVpv3KHqoXj1\nsj8DsVuumNiVUeB9Lbg+JYxxsrbqc6ShCu0XHZ/pzxJm4FKXitrgKBENz7r+i/IA\nF+m3fdveHPTLywWSwtbcemUwDtctYPRkKJnguMN+o82oNxYeagTPukFXEmSmJZ05\nH112CI2yCr36WZ9i2KGabQIDvH4KAo/dioTPmyj/SyZBnlPD4U7DclYPYzkeYuRk\npU3/L1t0qL8S3cLg0gJ90LUXl6+kmY/emza1EC2TYAnO+s1A87PgfmXA1N+CRCri\nCAVOJZ+5GjQ0TUUw+0R/ByB7XgqW8Il7WyUbfYNTDQKBgQDj9KM8fVqsHHESyOs0\nO9ZuX527kxkmDHhSvORdlxhfgpjN/iISnULH8MTkAIO1TxWq6FikKgg4dRl2+u4t\nB61Hc4kheTcgGTK1j2mwlhqe83lwrH2jjdv7dmPf40Y+IZSi1bKHTDSI5U+f5IX2\n2/klv0xGJckkumo84EMSD5ZgCwKBgQDdgZOeDkTzX2RG24uT3Wq2e0O+TdIMHIYm\nn3e0DbBnANum1Sc8ap+HMsnYobLlBa3zNVQH+kIEfzAlO+oEl2hq98RrOIbXX+SY\nNEULTK4+J+78Er6iY6jytbIHQXDKzvZrR38RGS/ku7IcXItk2KxU+XufXb0fCWSp\npPiAF9DQ+wKBgA21N1+61goFh9MuW95/PqzSeSS/esKr+0xWaZErNd8Adnnkr13Z\nMRve4agoU8NCZzYo1LPCh04F1Ksv+cShco0aaIOny2XVvhPm9N8Wl7E5SPM6nC+K\np1De1LCw9RdlY4/LM/oo3fvhdkFSN7AZmEjp0Qdi3E6mGx9gCQh8AXnzAoGAbDu/\nfLCuQlkvL2xhdFvxo77xaBCwfRiG+GJdZE54Dqydp5RpupzC3JYViNPiDQRMbhV1\nvPwsu/PF+7ud6qZs8C+m+1lAkgaaNUD9J7tNPLPYk7U5DzIxQH9FwUPZsE+Wmu7x\niNJM07BfJHqX5iv1cQQCwulT2tGFLVudzUFV2HcCgYAiQcAgaWV35Mlg/9FsqTMC\nnvi3fzEtUif6/v0WuGlRVtxxYlPVMr4IDQdOPLHJhJgy2XJu6fR3GX+q7ZH6h8A9\nj7GOuGjWFTxv+L5OGdrhO76Jh4EVKOi1u5uS2QRVdGKJaf/qSBxI7hbWuyvxAWuM\ne9/noslPgs8V3XEnhE2MNA==\n-----END PRIVATE KEY-----\n",
    "client_email": "phin-129@map-tester-356704.iam.gserviceaccount.com",
    "client_id": "114817078651256900340",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/phin-129%40map-tester-356704.iam.gserviceaccount.com"
  }
  )
});

const db = getFirestore();

module.exports = db;

