import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 20,
  },
  centered: {
    justifyContent: 'center',
  },
  mainHeaderContainer: {
    width: "100%",
    backgroundColor: "black",
    paddingVertical: 40,
    alignItems: "center",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50, 
  },
  mainHeader: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  myName: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    width: "90%",
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  submitBtn: {
    width: "50%",
    backgroundColor: "#2ECC71",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },
  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
  filterContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  filterBtn: {
    width: "30%",
    backgroundColor: "#ffffff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  filterText: {
    color: "black",
    fontSize: 15,
  },
  activeFilterBtn: {
    width: "30%",
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  activeFilterText: {
    color: "white",
    fontSize: 15,
  },
  todosContainer: {
    width: '95%',
    margin: 10,
  },
  todoContainer: {
    backgroundColor: "#fff", 
    padding: 15,
    width: "100%",
    minHeight: 70,
    alignSelf: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  todoTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  todoHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", 
  },
  todoDescription: {
    marginVertical: 10,
    color: "#555",
  },
  doneTodo: {
    textDecorationLine: "line-through",
  },
  error: {
    borderColor: "red",
    borderWidth: 1,
    backgroundColor: "#ffe6e6",
    color: "red",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  DoneDeleteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  markAsDone: {
    color: '#c79c02',
    padding: 10,
    fontSize: 16,
  },
  delete: {
    color: "red",
    padding: 10,
    fontSize: 16,
  }
});
export default styles;