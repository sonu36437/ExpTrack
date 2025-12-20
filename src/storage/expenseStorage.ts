import { createMMKV } from 'react-native-mmkv'
import { Expense } from '../model/Expense';
export const storage= createMMKV(
    {id:"expense-storage"}
)
export const KEY= 'expenses';
export const getExpenses=():Expense[]=>{
    const data=storage.getString(KEY);
    if(!data)return [];
    return JSON.parse(data);


}
export const setExpenses = (expenses: Expense[]): void => {
  storage.set(KEY, JSON.stringify(expenses));
  console.log("saved this: " ,expenses);
  
};
export const clearExpenses = (): void => {
  storage.remove(KEY);
};