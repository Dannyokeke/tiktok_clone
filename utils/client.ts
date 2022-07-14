import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'c30ffslc',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: 'skPzLYHEcyvBLvWxAwVOwLAqhNmHuuswbRVE2h25Vm8iC2TretKbH9YqowPCGqe3diNKWDNR8AI3lQCe4b3d8yVx9Wel5Ew2DZipk6ldbAVEEunONfnf13C6sF1CjBCO4d7abgxTxW8w86P8zuNKOohfeWPJAoDCqICDXnYXN4lNeoFwuFXs',
});
