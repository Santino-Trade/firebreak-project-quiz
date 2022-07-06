FROM node:13.12.0-alpine
WORKDIR /app/firebreak_quiz_frontend
COPY package.json package-lock.json ./
RUN npm install 
RUN npm install react-scripts@3.4.1 -g
RUN npm install bootstrap@4.6.0 reactstrap@8.9.0 --legacy-peer-deps
COPY . ./
EXPOSE 3000