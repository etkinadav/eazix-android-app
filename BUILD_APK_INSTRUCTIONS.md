# הוראות לבניית APK

## בעיה זוהתה

לא ניתן לבנות את ה-APK ישירות מהטרמינל כי:
- Android Studio לא נמצא ב-PATH
- Java לא נמצא ב-PATH

## פתרון: בנייה ידנית ב-Android Studio

### שלב 1: פתיחת הפרויקט ב-Android Studio

**אופציה א' - פתיחה ידנית:**
1. פתח את Android Studio
2. בחר **File > Open**
3. נווט לתיקייה: `C:\Users\User\Desktop\programming\eazix-android-app\android`
4. לחץ **OK**
5. המתן לסיום סנכרון Gradle (יכול לקחת כמה דקות בפעם הראשונה)

**אופציה ב' - הגדרת PATH (מומלץ לעתיד):**
אם Android Studio מותקן, הגדר את המשתנה:
```powershell
$env:CAPACITOR_ANDROID_STUDIO_PATH = "C:\Program Files\Android\Android Studio\bin\studio64.exe"
```
או דרך משתני סביבה של Windows.

### שלב 2: בניית APK

לאחר שהפרויקט נטען ב-Android Studio:

1. בתפריט העליון, בחר: **Build > Build Bundle(s) / APK(s) > Build APK(s)**
2. המתן שהבנייה תסתיים (תראה הודעה בתחתית המסך)
3. אם הבנייה הצליחה, תראה הודעה: **"APK(s) generated successfully"**

### שלב 3: מיקום ה-APK

לאחר בנייה מוצלחת, ה-APK ייווצר בנתיב:

```
android\app\build\outputs\apk\debug\app-debug.apk
```

**נתיב מלא:**
```
C:\Users\User\Desktop\programming\eazix-android-app\android\app\build\outputs\apk\debug\app-debug.apk
```

### שלב 4: גישה מהירה ל-APK

ב-Android Studio, לאחר בנייה מוצלחת:
1. לחץ על ההודעה **"locate"** או **"Show in Explorer"**
2. או לחץ על **Build > Analyze APK** ובחר את הקובץ

## פתרון בעיות נפוצות

### שגיאת Build
אם יש שגיאות build:
1. בדוק את ה-**Build** tab בתחתית Android Studio
2. חפש שגיאות אדומות
3. שגיאות נפוצות:
   - **Gradle sync failed** - נסה **File > Sync Project with Gradle Files**
   - **SDK not found** - התקן Android SDK דרך **Tools > SDK Manager**
   - **Java version mismatch** - ודא ש-Java 11+ מותקן

### בניית APK Release (מומלץ לפרודקשן)

לבניית APK חתום לפרודקשן:
1. **Build > Generate Signed Bundle / APK**
2. בחר **APK**
3. יצירת/בחירת keystore
4. בחר **release** variant
5. ה-APK ייווצר ב: `android\app\build\outputs\apk\release\app-release.apk`

**הערה:** APK debug לא חתום וניתן להתקין ישירות. APK release צריך חתימה.

## בדיקה מהירה

לאחר בנייה, בדוק שהקובץ קיים:
```powershell
Test-Path android\app\build\outputs\apk\debug\app-debug.apk
```

אם התוצאה היא `True`, ה-APK נוצר בהצלחה!

## הערות חשובות

1. **APK Debug** - לא חתום, מתאים לבדיקות
2. **APK Release** - צריך חתימה, מתאים לפרודקשן
3. **גודל APK** - יכול להיות גדול (50-100MB), זה תקין
4. **התקנה** - העתק את ה-APK למכשיר והתקן ישירות (צריך לאפשר "התקנה ממקורות לא ידועים")
