// def get_table():
//     try:
//       cnx = mysql.connector.connect(host=DB_HOST,
//                                     user=DB_USER,
//                                     password='',
//                                     database=DB_NAME)
//     except mysql.connector.Error as err:
//         print(err)
//         return str(err)

//     try:
//         cursor = cnx.cursor()
//         sql = 'select timestamp, tempUP, tempDOWN, doUP, doDOWN, depth from vertical_profiles'
//         cursor.execute(sql)
//         values = cursor.fetchall()
//     except Exception as err:
//         print(err)
//         cnx.close()
//         return str(err)

//     cnx.close()
//     return tabulate(sorted(values), headers=['Timestamp', 'TempUP', 'TempDOWN', 'doUP', 'doDOWN', 'depth'], tablefmt='html')
