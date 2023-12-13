
const Navbar = () => {
  return ( 
    <div className="flex justify-center">
        <div className="flex w-976 h-72 items-center ">
            <svg width="149" height="32" viewBox="0 0 149 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.056 0.639999C12.6827 0.639999 14.1333 0.826666 15.408 1.2C16.688 1.568 17.768 2.104 18.648 2.808C19.5333 3.512 20.208 4.37067 20.672 5.384C21.136 6.392 21.368 7.536 21.368 8.816H14.168C14.168 8.432 14.0933 8.09067 13.944 7.792C13.8 7.488 13.5893 7.232 13.312 7.024C13.0347 6.81067 12.696 6.648 12.296 6.536C11.896 6.424 11.4427 6.368 10.936 6.368C10.5253 6.368 10.1493 6.40533 9.808 6.48C9.46667 6.54933 9.17333 6.65067 8.928 6.784C8.688 6.91733 8.50133 7.07467 8.368 7.256C8.23467 7.432 8.168 7.62933 8.168 7.848C8.168 8.12533 8.23733 8.352 8.376 8.528C8.52 8.69867 8.74933 8.84267 9.064 8.96C9.37867 9.072 9.78933 9.17067 10.296 9.256C10.8027 9.336 11.424 9.42933 12.16 9.536L12.72 9.608C13.1893 9.67733 13.68 9.752 14.192 9.832C14.7093 9.912 15.2293 10.0133 15.752 10.136C16.28 10.2533 16.8 10.3973 17.312 10.568C17.8293 10.7387 18.32 10.9493 18.784 11.2C19.248 11.4453 19.6773 11.736 20.072 12.072C20.472 12.408 20.816 12.8 21.104 13.248C21.3973 13.696 21.6267 14.208 21.792 14.784C21.9573 15.3547 22.04 16.0027 22.04 16.728C22.04 17.9493 21.7973 19.04 21.312 20C20.8267 20.96 20.12 21.7733 19.192 22.44C18.264 23.1013 17.1253 23.608 15.776 23.96C14.4267 24.3067 12.888 24.48 11.16 24.48C9.34667 24.48 7.75733 24.288 6.392 23.904C5.02667 23.52 3.888 22.968 2.976 22.248C2.064 21.5227 1.37867 20.6427 0.92 19.608C0.466667 18.568 0.24 17.3973 0.24 16.096H7.44C7.44 16.5173 7.52267 16.8933 7.688 17.224C7.85867 17.5493 8.10133 17.8267 8.416 18.056C8.736 18.28 9.12533 18.4533 9.584 18.576C10.0427 18.6933 10.5653 18.752 11.152 18.752C11.648 18.752 12.0987 18.712 12.504 18.632C12.9093 18.5467 13.256 18.432 13.544 18.288C13.832 18.1387 14.056 17.9627 14.216 17.76C14.376 17.552 14.456 17.3253 14.456 17.08C14.456 16.7813 14.3813 16.544 14.232 16.368C14.088 16.192 13.8533 16.048 13.528 15.936C13.2027 15.8187 12.7813 15.7227 12.264 15.648C11.7467 15.568 11.12 15.4827 10.384 15.392L9.584 15.288C9.14133 15.2347 8.672 15.1733 8.176 15.104C7.68533 15.0347 7.18667 14.9467 6.68 14.84C6.17333 14.728 5.66933 14.5947 5.168 14.44C4.672 14.28 4.19733 14.0827 3.744 13.848C3.29067 13.6133 2.86933 13.336 2.48 13.016C2.096 12.6907 1.76 12.312 1.472 11.88C1.18933 11.4427 0.965333 10.944 0.8 10.384C0.64 9.81867 0.56 9.18133 0.56 8.472C0.56 7.63467 0.674667 6.86133 0.904 6.152C1.13333 5.43733 1.464 4.78933 1.896 4.208C2.328 3.62667 2.85333 3.11467 3.472 2.672C4.09067 2.22933 4.78933 1.85867 5.568 1.56C6.34667 1.256 7.19733 1.02667 8.12 0.872C9.04267 0.717333 10.0213 0.639999 11.056 0.639999ZM30.0413 24H22.9213V6.36H30.0413V11.968C30.3293 9.904 30.9426 8.37333 31.8813 7.376C32.8199 6.37867 34.0999 5.88 35.7213 5.88C36.5906 5.88 37.3399 6.024 37.9693 6.312C38.5986 6.59467 39.1159 7.03467 39.5213 7.632C39.9319 8.224 40.2359 8.98133 40.4333 9.904C40.6306 10.8213 40.7292 11.912 40.7292 13.176V24H33.6093V15.176C33.6093 14.0613 33.4626 13.24 33.1693 12.712C32.8813 12.184 32.4333 11.92 31.8253 11.92C31.2173 11.92 30.7666 12.1867 30.4733 12.72C30.1853 13.248 30.0413 14.0667 30.0413 15.176V24ZM59.8973 17.832C59.6359 18.8613 59.2306 19.7867 58.6813 20.608C58.1319 21.4293 57.4679 22.128 56.6893 22.704C55.9106 23.2747 55.0279 23.712 54.0413 24.016C53.0599 24.3253 52.0039 24.48 50.8733 24.48C49.9559 24.48 49.0893 24.3787 48.2733 24.176C47.4573 23.9733 46.7053 23.68 46.0173 23.296C45.3346 22.912 44.7186 22.448 44.1693 21.904C43.6253 21.3547 43.1613 20.736 42.7773 20.048C42.3986 19.3547 42.1079 18.6 41.9053 17.784C41.7026 16.968 41.6013 16.0987 41.6013 15.176C41.6013 14.2533 41.6999 13.384 41.8973 12.568C42.0999 11.7467 42.3879 10.992 42.7613 10.304C43.1399 9.616 43.5986 9 44.1373 8.456C44.6813 7.90667 45.2919 7.44267 45.9693 7.064C46.6519 6.68 47.3959 6.38667 48.2013 6.184C49.0119 5.98133 49.8733 5.88 50.7853 5.88C51.6973 5.88 52.5559 5.98133 53.3613 6.184C54.1719 6.38667 54.9159 6.68 55.5933 7.064C56.2759 7.44267 56.8866 7.90667 57.4253 8.456C57.9693 9 58.4279 9.61867 58.8013 10.312C59.1799 11 59.4679 11.7547 59.6653 12.576C59.8679 13.3973 59.9693 14.2693 59.9693 15.192C59.9693 15.416 59.9613 15.648 59.9453 15.888C59.9346 16.128 59.9159 16.352 59.8893 16.56H48.2173C48.3186 17.4453 48.6119 18.1227 49.0973 18.592C49.5879 19.056 50.2519 19.288 51.0893 19.288C52.2359 19.288 53.0386 18.8027 53.4973 17.832H59.8973ZM53.4893 13.36C53.3293 12.5173 53.0306 11.8987 52.5933 11.504C52.1613 11.1093 51.5746 10.912 50.8333 10.912C50.0759 10.912 49.4839 11.1147 49.0573 11.52C48.6359 11.92 48.3639 12.5333 48.2413 13.36H53.4893ZM60.805 13.304C60.805 12.152 61.0157 11.1173 61.437 10.2C61.8583 9.28267 62.461 8.504 63.245 7.864C64.0343 7.224 64.9943 6.73333 66.125 6.392C67.2557 6.05067 68.5303 5.88 69.949 5.88C71.357 5.88 72.6103 6.05067 73.709 6.392C74.813 6.73333 75.741 7.22933 76.493 7.88C77.2503 8.53067 77.8263 9.33333 78.221 10.288C78.6157 11.2373 78.813 12.32 78.813 13.536V24H71.693V19.824C71.5223 20.5387 71.253 21.184 70.885 21.76C70.5223 22.336 70.0797 22.8267 69.557 23.232C69.0397 23.632 68.4503 23.9387 67.789 24.152C67.133 24.3707 66.4237 24.48 65.661 24.48C64.8557 24.48 64.1223 24.3573 63.461 24.112C62.7997 23.872 62.2343 23.5333 61.765 23.096C61.2957 22.6533 60.9303 22.1227 60.669 21.504C60.413 20.88 60.285 20.1893 60.285 19.432C60.285 18.5573 60.461 17.7787 60.813 17.096C61.1703 16.4133 61.6877 15.84 62.365 15.376C63.0477 14.9067 63.885 14.552 64.877 14.312C65.8743 14.0667 67.0103 13.944 68.285 13.944H71.693V13.536C71.693 12.6773 71.5383 12.0267 71.229 11.584C70.925 11.136 70.437 10.912 69.765 10.912C69.109 10.912 68.6317 11.1173 68.333 11.528C68.0343 11.9333 67.885 12.5253 67.885 13.304H60.805ZM69.565 17.144C68.8717 17.144 68.349 17.2587 67.997 17.488C67.645 17.712 67.469 18.0453 67.469 18.488C67.469 18.8987 67.613 19.2213 67.901 19.456C68.189 19.6853 68.5837 19.8 69.085 19.8C69.437 19.8 69.7703 19.744 70.085 19.632C70.3997 19.52 70.6743 19.368 70.909 19.176C71.149 18.984 71.3383 18.7627 71.477 18.512C71.621 18.2613 71.693 17.9973 71.693 17.72V17.144H69.565ZM92.999 15.072L99.215 24H90.887L87.135 17.992V24H80.015V0.32H87.135V13.168L90.887 6.36H98.783L92.999 15.072ZM115.304 17.832C115.042 18.8613 114.637 19.7867 114.088 20.608C113.538 21.4293 112.874 22.128 112.096 22.704C111.317 23.2747 110.434 23.712 109.448 24.016C108.466 24.3253 107.41 24.48 106.28 24.48C105.362 24.48 104.496 24.3787 103.68 24.176C102.864 23.9733 102.112 23.68 101.424 23.296C100.741 22.912 100.125 22.448 99.5755 21.904C99.0315 21.3547 98.5675 20.736 98.1835 20.048C97.8048 19.3547 97.5142 18.6 97.3115 17.784C97.1088 16.968 97.0075 16.0987 97.0075 15.176C97.0075 14.2533 97.1062 13.384 97.3035 12.568C97.5062 11.7467 97.7942 10.992 98.1675 10.304C98.5462 9.616 99.0048 9 99.5435 8.456C100.088 7.90667 100.698 7.44267 101.376 7.064C102.058 6.68 102.802 6.38667 103.608 6.184C104.418 5.98133 105.28 5.88 106.192 5.88C107.104 5.88 107.962 5.98133 108.768 6.184C109.578 6.38667 110.322 6.68 111 7.064C111.682 7.44267 112.293 7.90667 112.832 8.456C113.376 9 113.834 9.61867 114.208 10.312C114.586 11 114.874 11.7547 115.072 12.576C115.274 13.3973 115.376 14.2693 115.376 15.192C115.376 15.416 115.368 15.648 115.352 15.888C115.341 16.128 115.322 16.352 115.296 16.56H103.624C103.725 17.4453 104.018 18.1227 104.504 18.592C104.994 19.056 105.658 19.288 106.496 19.288C107.642 19.288 108.445 18.8027 108.904 17.832H115.304ZM108.896 13.36C108.736 12.5173 108.437 11.8987 108 11.504C107.568 11.1093 106.981 10.912 106.24 10.912C105.482 10.912 104.89 11.1147 104.464 11.52C104.042 11.92 103.77 12.5333 103.648 13.36H108.896ZM123.448 24H116.328V6.36H123.448V13.24C123.538 12.1947 123.68 11.2507 123.872 10.408C124.069 9.56 124.341 8.83733 124.688 8.24C125.04 7.63733 125.48 7.17333 126.008 6.848C126.541 6.52267 127.186 6.36 127.944 6.36H129.368V13H125.936C125.418 13 124.997 13.0773 124.672 13.232C124.346 13.3813 124.093 13.616 123.911 13.936C123.73 14.256 123.608 14.6667 123.544 15.168C123.48 15.6693 123.448 16.2693 123.448 16.968V24ZM138.587 5.88C140.027 5.88 141.315 6.02933 142.451 6.328C143.587 6.62667 144.547 7.06133 145.331 7.632C146.115 8.19733 146.715 8.89067 147.131 9.712C147.547 10.5333 147.755 11.464 147.755 12.504H140.675C140.675 11.128 140.059 10.44 138.827 10.44C138.581 10.44 138.357 10.4667 138.155 10.52C137.952 10.568 137.779 10.64 137.635 10.736C137.491 10.8267 137.379 10.9387 137.299 11.072C137.219 11.2 137.179 11.3413 137.179 11.496C137.179 11.736 137.24 11.9333 137.363 12.088C137.485 12.2427 137.669 12.376 137.915 12.488C138.16 12.5947 138.461 12.688 138.819 12.768C139.181 12.8427 139.597 12.9253 140.067 13.016L141.251 13.24C141.699 13.3253 142.179 13.424 142.691 13.536C143.203 13.6427 143.712 13.784 144.219 13.96C144.731 14.1307 145.221 14.344 145.691 14.6C146.16 14.856 146.573 15.1707 146.931 15.544C147.288 15.9173 147.573 16.36 147.787 16.872C148.005 17.384 148.115 17.984 148.115 18.672C148.115 19.5893 147.912 20.408 147.507 21.128C147.107 21.848 146.523 22.456 145.755 22.952C144.987 23.448 144.048 23.8267 142.939 24.088C141.829 24.3493 140.565 24.48 139.147 24.48C137.643 24.48 136.307 24.3307 135.139 24.032C133.971 23.7387 132.989 23.3067 132.195 22.736C131.4 22.16 130.795 21.4533 130.379 20.616C129.968 19.7733 129.763 18.808 129.763 17.72H136.843C136.843 18.424 137.029 18.9547 137.403 19.312C137.776 19.664 138.331 19.84 139.067 19.84C139.355 19.84 139.619 19.8133 139.859 19.76C140.104 19.7067 140.315 19.632 140.491 19.536C140.667 19.4347 140.803 19.3173 140.899 19.184C140.995 19.0507 141.043 18.904 141.043 18.744C141.043 18.5253 140.995 18.3493 140.899 18.216C140.803 18.0773 140.64 17.96 140.411 17.864C140.181 17.768 139.877 17.68 139.499 17.6C139.12 17.52 138.651 17.4293 138.091 17.328L136.915 17.112C136.504 17.0373 136.048 16.9493 135.547 16.848C135.051 16.7413 134.549 16.6027 134.043 16.432C133.541 16.256 133.053 16.04 132.579 15.784C132.109 15.528 131.691 15.2107 131.323 14.832C130.96 14.448 130.667 13.9947 130.443 13.472C130.224 12.944 130.115 12.3253 130.115 11.616C130.115 10.7093 130.304 9.90133 130.683 9.192C131.067 8.48267 131.621 7.88267 132.347 7.392C133.072 6.90133 133.96 6.528 135.011 6.272C136.061 6.01067 137.253 5.88 138.587 5.88Z" fill="black"/>
            </svg>
            <div>
                <svg className="ml-custom" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_123)">
                <path d="M7 8V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C13.3261 1 14.5979 1.52678 15.5355 2.46447C16.4732 3.40215 17 4.67392 17 6V8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H7ZM7 10H5V20H19V10H17V12H15V10H9V12H7V10ZM9 8H15V6C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V8Z" fill="#09121F"/>
                </g>
                <defs>
                <clipPath id="clip0_1_123">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </div>
        </div>

    </div>
   );
}
 
export default Navbar;