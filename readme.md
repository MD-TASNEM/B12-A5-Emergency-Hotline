### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer:
getElementById: এটি কোনো এলিমেন্টের নির্দিষ্ট id ব্যবহার করে শুধুমাত্র একটি এলিমেন্ট সিলেক্ট করতে ব্যাবহার করা হয়।
getElementsByClassName: এটি একাধিক এলিমেন্ট সিলেক্ট করতে ব্যবহার করা হয়।
querySelector: এটি একটি CSS সিলেক্টর (যেমন: ., #, div) ব্যবহার করে প্রথম এলিমেন্ট সিলেক্ট করতে ব্যবহার করা হয়।
querySelectorAll: এটি একটি CSS সিলেক্টরের সাথে মিলে যাওয়া সবগুলো এলিমেন্ট সিলেক্ট করতে ব্যবহার করা হয়।


2. How do you **create and insert a new element into the DOM**?
Answer:
document.createElement('tagName') ব্যবহার করে একটি নতুন HTML এলিমেন্ট তৈরি করা যায় ।

3. What is **Event Bubbling** and how does it work?
Answer:
বাবল যেভাবে নিচের থেকে উপরে ওঠে সেভাবে html ডম এর মাধ্যমে নিচে থেকে উপরে ওঠার প্রক্রিয়াটি কে Bubbling বলে


4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer:
Event Delegation হলো parent element-এ event listener বসানো, আর event bubbling এর মাধ্যমে child element-এর event হ্যান্ডেল করা।
অনেকগুলো child element এর প্রতিটাতে আলাদা আলাদা listener বসানোর দরকার পড়ে না।


5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer:
preventDefault() :  event-এর ডিফল্ট action বন্ধ করে।
stopPropagation() :  event bubble হয়ে parent-এ যাওয়া বন্ধ করে।

