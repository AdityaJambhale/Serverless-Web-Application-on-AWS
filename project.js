{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const form = document.getElementById('greet-form');\
const greetingText = document.getElementById('greeting');\
const counter = document.querySelector(".counter-number");\
\
form.addEventListener('submit', (e) => \{\
  e.preventDefault();\
  const name = document.getElementById('name').value.trim();\
\
  if (name.length > 0) \{\
    greetingText.textContent = `\uc0\u10024  Hello, $\{name\}! Welcome to the cloud \u9729 \u65039 `;\
    greetingText.classList.remove("hidden");\
  \} else \{\
    greetingText.textContent = "";\
    greetingText.classList.add("hidden");\
  \}\
\});\
\
async function updateCounter() \{\
  try \{\
    const res = await fetch("https://o73g5ptpujgtclinhzhhneplje0jogoh.lambda-url.us-east-1.on.aws/");\
    const data = await res.json();\
    counter.textContent = data;\
  \} catch (err) \{\
    counter.textContent = "N/A";\
  \}\
\}\
\
updateCounter();\
}