import React,{Component} from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View,Image, TextInput,ActivityIndicator, ScrollView } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App =()=>{
    const navigation = useNavigation();
    return(
        <Scontainer>
            <Stop>
            <View style={{width:80,padding:20,justifyContent:'center',alignItems:'center'}}>
           <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image resizeMode={'contain'} source={require('../image/Vector16.png')} style={{width:25,height:25,}} />
           </TouchableOpacity>

            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
               <Text style={{fontSize:20,fontWeight:'bold'}}> Quy dinh chung</Text>
            </View>
            <View style={{width:80}}></View>
           
            </Stop>
            
            <Sdown>
                <ScrollView>
                <Stext>
                    <Text style={{fontSize:17,color:'blue'}}>1. Quy chế này quy định về nguyên tắc, chế độ trách nhiệm, lề lối làm việc, trình tự giải quyết công việc và quan hệ công tác của Ủy ban nhân dân tỉnh.</Text>
                </Stext>

                <Stext>
                    <Text style={{fontSize:17,color:'blue'}}>2. Các thành viên Ủy ban nhân dân tỉnh, Thủ trưởng các cơ quan chuyên môn, cơ quan thuộc Ủy ban nhân dân tỉnh và các tổ chức, cá nhân có quan hệ làm việc với Ủy ban nhân dân tỉnh chịu sự điều chỉnh của Quy chế này.</Text>
                </Stext>

                <Stext>
                    <Text style={{fontSize:17,color:'blue'}}>3. Ủy ban nhân dân tỉnh làm việc theo nguyên tắc tập trung dân chủ, vừa bảo đảm phát huy vai trò lãnh đạo của tập thể Ủy ban nhân dân, vừa đề cao trách nhiệm cá nhân của Chủ tịch, các Phó Chủ tịch và Ủy viên Ủy ban nhân dân tỉnh.</Text>
                </Stext>

                <Stext>
                    <Text style={{fontSize:17,color:'blue'}}>4.Giải quyết công việc theo quy định của pháp luật, sự chỉ đạo, điều hành của Chính phủ, Thủ tướng Chính phủ; bảo đảm sự lãnh đạo của cấp ủy Đảng, sự giám sát của Hội đồng nhân dân cùng cấp trong việc thực hiện chức năng, nhiệm vụ, quyền hạn được giao.</Text>
                </Stext>

                <Stext>
                    <Text style={{fontSize:17,color:'blue'}}>5.Trong phân công giải quyết công việc, mỗi việc chỉ được giao cho một cơ quan, đơn vị, một người phụ trách và chịu trách nhiệm chính. Cấp trên không làm thay công việc của cấp dưới, tập thể không làm thay công việc của cá nhân và ngược lại. Thủ trưởng cơ quan được giao công việc phải chịu trách nhiệm về tiến độ và kết quả công việc được phân công.</Text>
                </Stext>

                <Stext>
                    <Text style={{fontSize:17,color:'blue'}}>6.Trong phân công giải quyết công việc, mỗi việc chỉ được giao cho một cơ quan, đơn vị, một người phụ trách và chịu trách nhiệm chính. Cấp trên không làm thay công việc của cấp dưới, tập thể không làm thay công việc của cá nhân và ngược lại. Thủ trưởng cơ quan được giao công việc phải chịu trách nhiệm về tiến độ và kết quả công việc được phân công.</Text>
                </Stext>

                <Stext>
                    <Text style={{fontSize:17,color:'blue'}}>7.Trong phân công giải quyết công việc, mỗi việc chỉ được giao cho một cơ quan, đơn vị, một người phụ trách và chịu trách nhiệm chính. Cấp trên không làm thay công việc của cấp dưới, tập thể không làm thay công việc của cá nhân và ngược lại. Thủ trưởng cơ quan được giao công việc phải chịu trách nhiệm về tiến độ và kết quả công việc được phân công.</Text>
                </Stext>

                <Stext>
                    <Text style={{fontSize:17,color:'blue'}}>8.Trong phân công giải quyết công việc, mỗi việc chỉ được giao cho một cơ quan, đơn vị, một người phụ trách và chịu trách nhiệm chính. Cấp trên không làm thay công việc của cấp dưới, tập thể không làm thay công việc của cá nhân và ngược lại. Thủ trưởng cơ quan được giao công việc phải chịu trách nhiệm về tiến độ và kết quả công việc được phân công.</Text>
                </Stext>

                <Stext>
                    <Text style={{fontSize:17,color:'blue'}}>9.Trong phân công giải quyết công việc, mỗi việc chỉ được giao cho một cơ quan, đơn vị, một người phụ trách và chịu trách nhiệm chính. Cấp trên không làm thay công việc của cấp dưới, tập thể không làm thay công việc của cá nhân và ngược lại. Thủ trưởng cơ quan được giao công việc phải chịu trách nhiệm về tiến độ và kết quả công việc được phân công.</Text>
                </Stext>
                </ScrollView>
                
            </Sdown>



        </Scontainer>
        
    )
};
const Scontainer=styled.View`
    flex:1;
    background-color:white;
`
const Stop=styled.View`
    flex:1;
    flex-direction:row;
    border-bottom-width:0.7px;
    border-bottom-color:#DEDEDE;
    padding-bottom:10px;


`
const Sdown=styled.View`    
    flex-direction:column;
    flex:9;
    padding:20px 20px 0px 20px
`;
const Stext=styled.View`
    align-items:center;
    justify-content:center;
    padding-bottom:20px;
`
export default App;
