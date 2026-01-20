

export const isTodaysTransactions =(isoString:string,compareDate:Date)=>{
    const d= new Date(isoString);
    return d.getDate()===compareDate.getDate();

}
