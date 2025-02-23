import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },
  mainHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  detailContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 'auto'
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
  },
  detailDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
    lineHeight: 22,
  },
  detailDate: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  detailStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498DB',
  },
  doneButton: {
    marginTop: 20,
    backgroundColor: '#2ECC71',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#E74C3C',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
