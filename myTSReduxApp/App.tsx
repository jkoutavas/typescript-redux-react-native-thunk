/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, useCallback} from 'react';
import {StyleSheet, View, Button, SafeAreaView, Text} from 'react-native';

import {useDispatch} from 'react-redux';

import {Dispatch} from './store/type';
import {getPageListAction, usePageList} from './store/pageReducer';
import {Employee} from 'store/pageReducer/type';

function EmployeeList(): JSX.Element {
  const pageList = usePageList();
  const dispatch = useDispatch<Dispatch>();
  const callback = useCallback(() => dispatch(getPageListAction()), [dispatch]);

  return (
    <SafeAreaView>
      <Button title="Get Employees" onPress={() => callback()} />
      {pageList !== undefined &&
        pageList.map((employee: Employee) => (
          <View style={styles.employeeWrapper} key={employee.id}>
            <Text style={styles.textCenter}>Employee_id : {employee.id}</Text>
            <Text style={styles.textCenter}>
              Employee Name : {employee.employee_name}
            </Text>
            <Text style={styles.textCenter}>
              Employee Salary : {employee.employee_salary}
            </Text>
            <Text style={styles.textCenter}>
              Employee Age : {employee.employee_age}
            </Text>
          </View>
        ))}
    </SafeAreaView>
  );
}

class App extends Component {
  render() {
    return <EmployeeList />;
  }
}

export default App;

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
  },
  employeeWrapper: {
    padding: 10,
    borderBottomWidth: 1,
  },
});
