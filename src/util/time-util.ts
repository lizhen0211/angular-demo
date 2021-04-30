import dateFormat from 'dateformat';

export default class TimeUtil {

  /**
   * 通过字符串时间获取时间戳
   * @param dateStr 时间字符串
   * @return number
   */
  public static getTimeStampByStr(dateStr: string): number {
    return Date.parse(dateStr);
  }

  /**
   * 通过时间戳获取日期
   * @param timeStamp 时间戳
   * @return string
   */
  public static getDateByTimeStamp(timeStamp: number): string {
    return new Date(timeStamp).toDateString();
  }

  /**
   * 日期格式化
   * @param timeStampOrDateStr 时间戳或日期字符串
   * @returns string
   */
  public static getDateYYYYMMDD(timeStampOrDateStr: string | number): string {
    return dateFormat(new Date(timeStampOrDateStr), 'yyyy-mm-dd');
  }

  /**
   * 日期格式化
   * @param timeStampOrDateStr 时间戳或日期字符串
   * @returns string
   */
  public static getDateYYYYMMDDByFormat(timeStampOrDateStr: string | number, format: string): string {
    return dateFormat(new Date(timeStampOrDateStr), format);
  }

  /**
   * 日期格式化
   * @param timeStampOrDateStr 时间戳或日期字符串
   * return string
   */

  public static getDateYYYYMMDDHHMMSS(timeStampOrDateStr: string | number): string {
    return dateFormat(new Date(timeStampOrDateStr), 'yyyy-mm-dd HH:MM:ss');
  }

  /**
   * 日期格式化
   * @param timeStampOrDateStr 时间戳或日期字符串
   * @return string
   */
  public static getDateYYYYMMDDHHMM(timeStampOrDateStr: string | number) {
    return dateFormat(new Date(timeStampOrDateStr), 'yyyy-mm-dd HH:MM');
  }

  /**
   * 日期格式化
   * @param timeStampOrDateStr 时间戳或日期字符串
   * @returns string
   */
  public static getDatemmDDHHMM(timeStampOrDateStr: string | number): string {
    return dateFormat(new Date(timeStampOrDateStr), 'mm-dd HH:MM');
  }

  /**
   * 日期格式化
   * @param timeStampOrDateStr 时间戳或日期字符串
   * @return string
   */

  public static getDateHHMM(timeStampOrDateStr: string | number): string {
    return dateFormat(new Date(timeStampOrDateStr), 'HH:MM');
  }

  /**
   * 日期格式化
   * @param timeStampOrDateStr 时间戳或日期字符串
   * @returns string
   */
  public static getDate(timeStampOrDateStr: string | number, format: string): string {
    return dateFormat(new Date(timeStampOrDateStr), format);
  }
}
