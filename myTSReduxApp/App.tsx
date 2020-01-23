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
import {bindActionCreators, Dispatch, AnyAction} from 'redux';
import * as pageActions from './actions/pageList';
import {IEmployee, IStateModel} from './constants';

interface IAppProps {
  actions: AnyAction;
  pageList: IStateModel;
}

class App extends Component<IAppProps> {
  getPageList() {
    let {actions} = this.props;
    actions.getPageList();
  }
  render() {
    const {pageList} = this.props;
    return (
      <SafeAreaView>
        <Button title="Get Employees" onPress={() => this.getPageList()} />
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

const mapStateToProps = (state: IStateModel): IStateModel => ({
  pageList: state.pageList.pageList,
});

// TODO: lose some of these 'any' types
const mapDispatchToProps = (dispatch: Dispatch<IStateModel>): any => ({
  // NOTE: When using thunk action creators you need to use bindActionCreators
  // https://github.com/piotrwitek/react-redux-typescript-guide#connect-with-react-redux
  actions: bindActionCreators<any, any>(pageActions, dispatch),
});

// TODO: work-out the tslint warnings on the parameters on connect()
export default connect(mapStateToProps, mapDispatchToProps)(App);
