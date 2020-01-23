/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Button, SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pageActions from './actions/pageList';
import {IEmployee} from './constants';

class App extends Component {
  incrementCount() {
    let {actions} = this.props;
    actions.getPageList();
  }
  render() {
    const {pageList} = this.props;
    return (
      <SafeAreaView>
        <Button title="Get Employees" onPress={() => this.incrementCount()} />
        {pageList.map((employee: IEmployee) => (
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
}

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
  },
  employeeWrapper: {
    padding: 10,
    borderBottomWidth: 1,
  },
});

const mapStateToProps = (state: any) => ({
  pageList: state.pageList.pageList,
});

const ActionCreators = Object.assign({}, pageActions);
const mapDispatchToProps = (dispatch: any): any => {
  return {actions: bindActionCreators(ActionCreators, dispatch)};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
