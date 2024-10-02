// استيراد دالة useState من مكتبة React
import { useState } from "react";

// تعريف المكون الرئيسي ShowHideText وتصديره كالمكون الافتراضي
export default function ShowHideText() {
    // تعريف حالة isVisible وتعيين قيمتها الابتدائية إلى true
    const [isVisible, setIsVisible] = useState(true);

    // تعريف دالة toggleVisibility لتغيير قيمة isVisible
    const toggleVisibility = () => {
        // تغيير قيمة isVisible إلى القيمة العكسية لها
        setIsVisible(!isVisible);
    };

    // إرجاع JSX الذي سيتم عرضه في واجهة المستخدم
    return (
        <>
            {/* عرض الفقرة فقط إذا كانت isVisible تساوي true */}
            {isVisible && <p>This is visible</p>}
            {/* زر لتغيير حالة isVisible عند النقر عليه */}
            <button onClick={toggleVisibility}>Show / Hide Text</button>
        </>
    );
}
