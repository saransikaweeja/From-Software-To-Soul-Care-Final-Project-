
import React from 'react'

const footer = () => {
  return (
    <footer className="mt-auto border-t md:border-t-0 border-gray-200 dark:border-neutral-700">
    <div className="w-full max-w-7xl py-10 md:pt-0 px-4 sm:px-6 lg:px-8 mx-auto">
 
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
        <div className="text-center md:text-start">

          <svg className="w-48 h-auto mx-auto md:mx-0" width="200" height="32" viewBox="0 0 431 32" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path className="fill-black dark:fill-white"
              d="M17.3097 10.2756C17.196 9.12973 16.7083 8.23958 15.8466 7.60511C14.9848 6.97064 13.8153 6.65341 12.3381 6.65341C11.3343 6.65341 10.4867 6.79545 9.79545 7.07955C9.10417 7.35417 8.57386 7.73769 8.20455 8.23011C7.8447 8.72254 7.66477 9.28125 7.66477 9.90625C7.64583 10.4271 7.75473 10.8816 7.99148 11.2699C8.23769 11.6581 8.57386 11.9943 9 12.2784C9.42614 12.553 9.91856 12.7945 10.4773 13.0028C11.036 13.2017 11.6326 13.3722 12.267 13.5142L14.8807 14.1392C16.1496 14.4233 17.3144 14.8021 18.375 15.2756C19.4356 15.7491 20.3542 16.3314 21.1307 17.0227C21.9072 17.714 22.5085 18.5284 22.9347 19.4659C23.3703 20.4034 23.5928 21.4782 23.6023 22.6903C23.5928 24.4706 23.1383 26.0142 22.2386 27.321C21.3485 28.6184 20.0606 29.6269 18.375 30.3466C16.6989 31.0568 14.6771 31.4119 12.3097 31.4119C9.96117 31.4119 7.91572 31.0521 6.1733 30.3324C4.44034 29.6127 3.08617 28.5473 2.1108 27.1364C1.14489 25.7159 0.638258 23.9593 0.590909 21.8665H6.54261C6.6089 22.8419 6.88826 23.6562 7.38068 24.3097C7.88258 24.9536 8.55019 25.4413 9.38352 25.7727C10.2263 26.0947 11.178 26.2557 12.2386 26.2557C13.2803 26.2557 14.1847 26.1042 14.9517 25.8011C15.7282 25.4981 16.3295 25.0767 16.7557 24.5369C17.1818 23.9972 17.3949 23.3769 17.3949 22.6761C17.3949 22.0227 17.2008 21.4735 16.8125 21.0284C16.4337 20.5833 15.875 20.2045 15.1364 19.892C14.4072 19.5795 13.5123 19.2955 12.4517 19.0398L9.28409 18.2443C6.83144 17.6477 4.89489 16.715 3.47443 15.446C2.05398 14.1771 1.34848 12.4678 1.35795 10.3182C1.34848 8.55682 1.81723 7.01799 2.7642 5.7017C3.72064 4.38542 5.0322 3.35795 6.69886 2.61932C8.36553 1.88068 10.2595 1.51136 12.3807 1.51136C14.5398 1.51136 16.4242 1.88068 18.0341 2.61932C19.6534 3.35795 20.9129 4.38542 21.8125 5.7017C22.7121 7.01799 23.1761 8.54261 23.2045 10.2756H17.3097ZM37.4837 31.4261C35.2772 31.4261 33.3691 30.9574 31.7592 30.0199C30.1589 29.0729 28.9231 27.7566 28.0518 26.071C27.1806 24.3759 26.745 22.411 26.745 20.1761C26.745 17.9223 27.1806 15.9527 28.0518 14.267C28.9231 12.572 30.1589 11.2557 31.7592 10.3182C33.3691 9.37121 35.2772 8.89773 37.4837 8.89773C39.6901 8.89773 41.5935 9.37121 43.1939 10.3182C44.8037 11.2557 46.0443 12.572 46.9155 14.267C47.7867 15.9527 48.2223 17.9223 48.2223 20.1761C48.2223 22.411 47.7867 24.3759 46.9155 26.071C46.0443 27.7566 44.8037 29.0729 43.1939 30.0199C41.5935 30.9574 39.6901 31.4261 37.4837 31.4261ZM37.5121 26.7386C38.5159 26.7386 39.3539 26.4545 40.0263 25.8864C40.6986 25.3087 41.2053 24.5227 41.5462 23.5284C41.8965 22.5341 42.0717 21.4025 42.0717 20.1335C42.0717 18.8646 41.8965 17.733 41.5462 16.7386C41.2053 15.7443 40.6986 14.9583 40.0263 14.3807C39.3539 13.803 38.5159 13.5142 37.5121 13.5142C36.4988 13.5142 35.6465 13.803 34.9553 14.3807C34.2734 14.9583 33.7573 15.7443 33.407 16.7386C33.0661 17.733 32.8956 18.8646 32.8956 20.1335C32.8956 21.4025 33.0661 22.5341 33.407 23.5284C33.7573 24.5227 34.2734 25.3087 34.9553 25.8864C35.6465 26.4545 36.4988 26.7386 37.5121 26.7386ZM63.8899 9.18182V13.7273H50.424V9.18182H63.8899ZM53.5064 31V7.60511C53.5064 6.02367 53.8142 4.71212 54.4297 3.67045C55.0547 2.62879 55.907 1.84754 56.9865 1.3267C58.0661 0.805869 59.2924 0.545453 60.6655 0.545453C61.5935 0.545453 62.4411 0.616476 63.2081 0.758523C63.9846 0.900568 64.5623 1.02841 64.9411 1.14205L63.8615 5.6875C63.6248 5.61174 63.3312 5.54072 62.9808 5.47443C62.6399 5.40814 62.2895 5.375 61.9297 5.375C61.0395 5.375 60.4193 5.58333 60.0689 6C59.7185 6.4072 59.5433 6.98011 59.5433 7.71875V31H53.5064ZM79.1918 9.18182V13.7273H66.0526V9.18182H79.1918ZM69.0355 3.95455H75.0866V24.2955C75.0866 24.8542 75.1719 25.2898 75.3423 25.6023C75.5128 25.9053 75.7495 26.1184 76.0526 26.2415C76.3651 26.3646 76.7249 26.4261 77.1321 26.4261C77.4162 26.4261 77.7003 26.4025 77.9844 26.3551C78.2685 26.2983 78.4863 26.2557 78.6378 26.2273L79.5895 30.7301C79.2865 30.8248 78.8603 30.9337 78.3111 31.0568C77.7618 31.1894 77.0942 31.2699 76.3082 31.2983C74.8499 31.3551 73.5715 31.161 72.473 30.7159C71.384 30.2708 70.5365 29.5795 69.9304 28.642C69.3243 27.7045 69.026 26.5208 69.0355 25.0909V3.95455ZM87.4375 31L81.5 9.18182H87.6222L91.0028 23.8409H91.2017L94.7244 9.18182H100.733L104.312 23.7557H104.497L107.821 9.18182H113.929L108.006 31H101.599L97.8494 17.2784H97.5795L93.8295 31H87.4375ZM123.379 31.4119C121.987 31.4119 120.746 31.1705 119.657 30.6875C118.568 30.1951 117.706 29.4706 117.072 28.5142C116.447 27.5483 116.134 26.3456 116.134 24.9062C116.134 23.6941 116.357 22.6761 116.802 21.8523C117.247 21.0284 117.853 20.3655 118.62 19.8636C119.387 19.3617 120.258 18.983 121.234 18.7273C122.219 18.4716 123.251 18.2917 124.33 18.1875C125.599 18.0549 126.622 17.9318 127.398 17.8182C128.175 17.6951 128.738 17.5152 129.089 17.2784C129.439 17.0417 129.614 16.6913 129.614 16.2273V16.142C129.614 15.2424 129.33 14.5464 128.762 14.054C128.203 13.5616 127.408 13.3153 126.376 13.3153C125.287 13.3153 124.42 13.5568 123.776 14.0398C123.132 14.5133 122.706 15.1098 122.498 15.8295L116.901 15.375C117.185 14.0492 117.744 12.9034 118.577 11.9375C119.411 10.9621 120.486 10.214 121.802 9.69318C123.128 9.16288 124.662 8.89773 126.404 8.89773C127.616 8.89773 128.776 9.03977 129.884 9.32386C131.002 9.60795 131.991 10.0483 132.853 10.6449C133.724 11.2415 134.411 12.0085 134.913 12.946C135.415 13.8741 135.665 14.9867 135.665 16.2841V31H129.927V27.9744H129.756C129.406 28.6562 128.937 29.2576 128.35 29.7784C127.763 30.2898 127.058 30.6922 126.234 30.9858C125.41 31.2699 124.458 31.4119 123.379 31.4119ZM125.112 27.2358C126.002 27.2358 126.788 27.0606 127.469 26.7102C128.151 26.3504 128.686 25.8674 129.075 25.2614C129.463 24.6553 129.657 23.9687 129.657 23.2017V20.8864C129.468 21.0095 129.207 21.1231 128.876 21.2273C128.554 21.322 128.189 21.4119 127.782 21.4972C127.375 21.5729 126.968 21.6439 126.56 21.7102C126.153 21.767 125.784 21.8191 125.452 21.8665C124.742 21.9706 124.122 22.1364 123.592 22.3636C123.061 22.5909 122.649 22.8987 122.356 23.2869C122.062 23.6657 121.915 24.1392 121.915 24.7074C121.915 25.5312 122.214 26.161 122.81 26.5966C123.416 27.0227 124.183 27.2358 125.112 27.2358ZM140.36 31V9.18182H146.227V12.9886H146.454C146.852 11.6345 147.519 10.6117 148.457 9.92045C149.394 9.2197 150.474 8.86932 151.695 8.86932C151.998 8.86932 152.325 8.88826 152.675 8.92614C153.026 8.96402 153.334 9.0161 153.599 9.08239V14.4517C153.315 14.3665 152.922 14.2907 152.42 14.2244C151.918 14.1581 151.459 14.125 151.042 14.125C150.152 14.125 149.356 14.3191 148.656 14.7074C147.964 15.0862 147.415 15.6165 147.008 16.2983C146.61 16.9801 146.411 17.7661 146.411 18.6562V31H140.36ZM165.655 31.4261C163.411 31.4261 161.479 30.9716 159.859 30.0625C158.25 29.1439 157.009 27.8466 156.138 26.1705C155.267 24.4848 154.831 22.4915 154.831 20.1903C154.831 17.946 155.267 15.9763 156.138 14.2812C157.009 12.5862 158.235 11.2652 159.817 10.3182C161.408 9.37121 163.273 8.89773 165.413 8.89773C166.853 8.89773 168.193 9.12973 169.433 9.59375C170.683 10.0483 171.772 10.7348 172.7 11.6534C173.638 12.572 174.367 13.7273 174.888 15.1193C175.409 16.5019 175.669 18.1212 175.669 19.9773V21.6392H157.246V17.8892H169.973C169.973 17.018 169.784 16.2462 169.405 15.5739C169.026 14.9015 168.5 14.3759 167.828 13.9972C167.165 13.6089 166.393 13.4148 165.513 13.4148C164.594 13.4148 163.78 13.6278 163.07 14.054C162.369 14.4706 161.82 15.0341 161.422 15.7443C161.024 16.4451 160.821 17.2263 160.811 18.0881V21.6534C160.811 22.733 161.01 23.6657 161.408 24.4517C161.815 25.2377 162.388 25.8438 163.126 26.2699C163.865 26.696 164.741 26.9091 165.754 26.9091C166.427 26.9091 167.042 26.8144 167.601 26.625C168.16 26.4356 168.638 26.1515 169.036 25.7727C169.433 25.3939 169.736 24.9299 169.945 24.3807L175.541 24.75C175.257 26.0947 174.675 27.2689 173.794 28.2727C172.923 29.267 171.796 30.0436 170.413 30.6023C169.04 31.1515 167.454 31.4261 165.655 31.4261ZM187.881 6.98011V1.90909H211.773V6.98011H202.867V31H196.788V6.98011H187.881ZM222.288 31.4261C220.082 31.4261 218.174 30.9574 216.564 30.0199C214.964 29.0729 213.728 27.7566 212.857 26.071C211.985 24.3759 211.55 22.411 211.55 20.1761C211.55 17.9223 211.985 15.9527 212.857 14.267C213.728 12.572 214.964 11.2557 216.564 10.3182C218.174 9.37121 220.082 8.89773 222.288 8.89773C224.495 8.89773 226.398 9.37121 227.999 10.3182C229.608 11.2557 230.849 12.572 231.72 14.267C232.591 15.9527 233.027 17.9223 233.027 20.1761C233.027 22.411 232.591 24.3759 231.72 26.071C230.849 27.7566 229.608 29.0729 227.999 30.0199C226.398 30.9574 224.495 31.4261 222.288 31.4261ZM222.317 26.7386C223.321 26.7386 224.159 26.4545 224.831 25.8864C225.503 25.3087 226.01 24.5227 226.351 23.5284C226.701 22.5341 226.876 21.4025 226.876 20.1335C226.876 18.8646 226.701 17.733 226.351 16.7386C226.01 15.7443 225.503 14.9583 224.831 14.3807C224.159 13.803 223.321 13.5142 222.317 13.5142C221.304 13.5142 220.451 13.803 219.76 14.3807C219.078 14.9583 218.562 15.7443 218.212 16.7386C217.871 17.733 217.7 18.8646 217.7 20.1335C217.7 21.4025 217.871 22.5341 218.212 23.5284C218.562 24.5227 219.078 25.3087 219.76 25.8864C220.451 26.4545 221.304 26.7386 222.317 26.7386ZM262.114 10.2756C262.001 9.12973 261.513 8.23958 260.651 7.60511C259.79 6.97064 258.62 6.65341 257.143 6.65341C256.139 6.65341 255.291 6.79545 254.6 7.07955C253.909 7.35417 253.379 7.73769 253.009 8.23011C252.649 8.72254 252.469 9.28125 252.469 9.90625C252.451 10.4271 252.559 10.8816 252.796 11.2699C253.042 11.6581 253.379 11.9943 253.805 12.2784C254.231 12.553 254.723 12.7945 255.282 13.0028C255.841 13.2017 256.437 13.3722 257.072 13.5142L259.685 14.1392C260.954 14.4233 262.119 14.8021 263.18 15.2756C264.24 15.7491 265.159 16.3314 265.935 17.0227C266.712 17.714 267.313 18.5284 267.739 19.4659C268.175 20.4034 268.397 21.4782 268.407 22.6903C268.397 24.4706 267.943 26.0142 267.043 27.321C266.153 28.6184 264.865 29.6269 263.18 30.3466C261.504 31.0568 259.482 31.4119 257.114 31.4119C254.766 31.4119 252.72 31.0521 250.978 30.3324C249.245 29.6127 247.891 28.5473 246.915 27.1364C245.95 25.7159 245.443 23.9593 245.396 21.8665H251.347C251.414 22.8419 251.693 23.6562 252.185 24.3097C252.687 24.9536 253.355 25.4413 254.188 25.7727C255.031 26.0947 255.983 26.2557 257.043 26.2557C258.085 26.2557 258.989 26.1042 259.756 25.8011C260.533 25.4981 261.134 25.0767 261.56 24.5369C261.987 23.9972 262.2 23.3769 262.2 22.6761C262.2 22.0227 262.005 21.4735 261.617 21.0284C261.238 20.5833 260.68 20.2045 259.941 19.892C259.212 19.5795 258.317 19.2955 257.256 19.0398L254.089 18.2443C251.636 17.6477 249.7 16.715 248.279 15.446C246.859 14.1771 246.153 12.4678 246.163 10.3182C246.153 8.55682 246.622 7.01799 247.569 5.7017C248.525 4.38542 249.837 3.35795 251.504 2.61932C253.17 1.88068 255.064 1.51136 257.185 1.51136C259.344 1.51136 261.229 1.88068 262.839 2.61932C264.458 3.35795 265.718 4.38542 266.617 5.7017C267.517 7.01799 267.981 8.54261 268.009 10.2756H262.114ZM282.288 31.4261C280.082 31.4261 278.174 30.9574 276.564 30.0199C274.964 29.0729 273.728 27.7566 272.857 26.071C271.985 24.3759 271.55 22.411 271.55 20.1761C271.55 17.9223 271.985 15.9527 272.857 14.267C273.728 12.572 274.964 11.2557 276.564 10.3182C278.174 9.37121 280.082 8.89773 282.288 8.89773C284.495 8.89773 286.398 9.37121 287.999 10.3182C289.608 11.2557 290.849 12.572 291.72 14.267C292.591 15.9527 293.027 17.9223 293.027 20.1761C293.027 22.411 292.591 24.3759 291.72 26.071C290.849 27.7566 289.608 29.0729 287.999 30.0199C286.398 30.9574 284.495 31.4261 282.288 31.4261ZM282.317 26.7386C283.321 26.7386 284.159 26.4545 284.831 25.8864C285.503 25.3087 286.01 24.5227 286.351 23.5284C286.701 22.5341 286.876 21.4025 286.876 20.1335C286.876 18.8646 286.701 17.733 286.351 16.7386C286.01 15.7443 285.503 14.9583 284.831 14.3807C284.159 13.803 283.321 13.5142 282.317 13.5142C281.304 13.5142 280.451 13.803 279.76 14.3807C279.078 14.9583 278.562 15.7443 278.212 16.7386C277.871 17.733 277.7 18.8646 277.7 20.1335C277.7 21.4025 277.871 22.5341 278.212 23.5284C278.562 24.5227 279.078 25.3087 279.76 25.8864C280.451 26.4545 281.304 26.7386 282.317 26.7386ZM310.953 21.7102V9.18182H317.004V31H311.195V27.0369H310.967C310.475 28.3153 309.656 29.3428 308.51 30.1193C307.374 30.8958 305.986 31.2841 304.348 31.2841C302.89 31.2841 301.607 30.9527 300.499 30.2898C299.391 29.6269 298.524 28.6847 297.899 27.4631C297.284 26.2415 296.971 24.7784 296.962 23.0739V9.18182H303.013V21.9943C303.022 23.2822 303.368 24.3002 304.05 25.0483C304.732 25.7964 305.645 26.1705 306.791 26.1705C307.52 26.1705 308.202 26.0047 308.837 25.6733C309.471 25.3324 309.982 24.8305 310.371 24.1676C310.768 23.5047 310.963 22.6856 310.953 21.7102ZM327.896 1.90909V31H321.844V1.90909H327.896ZM367.782 12.0938H361.56C361.447 11.2888 361.215 10.5739 360.864 9.94886C360.514 9.31439 360.064 8.77462 359.515 8.32955C358.966 7.88447 358.331 7.54356 357.612 7.30682C356.901 7.07008 356.129 6.9517 355.296 6.9517C353.79 6.9517 352.479 7.32576 351.362 8.07386C350.244 8.8125 349.378 9.89205 348.762 11.3125C348.147 12.7235 347.839 14.4375 347.839 16.4545C347.839 18.5284 348.147 20.2708 348.762 21.6818C349.387 23.0928 350.258 24.1581 351.376 24.8778C352.493 25.5975 353.786 25.9574 355.254 25.9574C356.077 25.9574 356.84 25.8485 357.54 25.6307C358.251 25.4129 358.88 25.0956 359.43 24.679C359.979 24.2528 360.433 23.7367 360.793 23.1307C361.163 22.5246 361.418 21.8333 361.56 21.0568L367.782 21.0852C367.621 22.4205 367.219 23.7083 366.575 24.9489C365.94 26.1799 365.083 27.2831 364.004 28.2585C362.933 29.2244 361.655 29.9915 360.168 30.5597C358.691 31.1184 357.02 31.3977 355.154 31.3977C352.559 31.3977 350.239 30.8106 348.194 29.6364C346.158 28.4621 344.548 26.7623 343.364 24.5369C342.19 22.3116 341.603 19.6174 341.603 16.4545C341.603 13.2822 342.2 10.5833 343.393 8.35795C344.586 6.13258 346.205 4.4375 348.251 3.27273C350.296 2.09848 352.597 1.51136 355.154 1.51136C356.84 1.51136 358.402 1.74811 359.842 2.22159C361.29 2.69508 362.574 3.38636 363.691 4.29545C364.808 5.19507 365.718 6.29829 366.418 7.60511C367.129 8.91193 367.583 10.4081 367.782 12.0938ZM378.3 31.4119C376.908 31.4119 375.668 31.1705 374.579 30.6875C373.49 30.1951 372.628 29.4706 371.994 28.5142C371.369 27.5483 371.056 26.3456 371.056 24.9062C371.056 23.6941 371.279 22.6761 371.724 21.8523C372.169 21.0284 372.775 20.3655 373.542 19.8636C374.309 19.3617 375.18 18.983 376.156 18.7273C377.14 18.4716 378.173 18.2917 379.252 18.1875C380.521 18.0549 381.544 17.9318 382.32 17.8182C383.097 17.6951 383.66 17.5152 384.011 17.2784C384.361 17.0417 384.536 16.6913 384.536 16.2273V16.142C384.536 15.2424 384.252 14.5464 383.684 14.054C383.125 13.5616 382.33 13.3153 381.298 13.3153C380.209 13.3153 379.342 13.5568 378.698 14.0398C378.054 14.5133 377.628 15.1098 377.42 15.8295L371.823 15.375C372.107 14.0492 372.666 12.9034 373.499 11.9375C374.333 10.9621 375.407 10.214 376.724 9.69318C378.049 9.16288 379.584 8.89773 381.326 8.89773C382.538 8.89773 383.698 9.03977 384.806 9.32386C385.924 9.60795 386.913 10.0483 387.775 10.6449C388.646 11.2415 389.333 12.0085 389.835 12.946C390.336 13.8741 390.587 14.9867 390.587 16.2841V31H384.849V27.9744H384.678C384.328 28.6562 383.859 29.2576 383.272 29.7784C382.685 30.2898 381.979 30.6922 381.156 30.9858C380.332 31.2699 379.38 31.4119 378.3 31.4119ZM380.033 27.2358C380.924 27.2358 381.71 27.0606 382.391 26.7102C383.073 26.3504 383.608 25.8674 383.996 25.2614C384.385 24.6553 384.579 23.9687 384.579 23.2017V20.8864C384.389 21.0095 384.129 21.1231 383.798 21.2273C383.476 21.322 383.111 21.4119 382.704 21.4972C382.297 21.5729 381.889 21.6439 381.482 21.7102C381.075 21.767 380.706 21.8191 380.374 21.8665C379.664 21.9706 379.044 22.1364 378.513 22.3636C377.983 22.5909 377.571 22.8987 377.278 23.2869C376.984 23.6657 376.837 24.1392 376.837 24.7074C376.837 25.5312 377.136 26.161 377.732 26.5966C378.338 27.0227 379.105 27.2358 380.033 27.2358ZM395.282 31V9.18182H401.148V12.9886H401.376C401.773 11.6345 402.441 10.6117 403.379 9.92045C404.316 9.2197 405.396 8.86932 406.617 8.86932C406.92 8.86932 407.247 8.88826 407.597 8.92614C407.948 8.96402 408.255 9.0161 408.521 9.08239V14.4517C408.237 14.3665 407.844 14.2907 407.342 14.2244C406.84 14.1581 406.38 14.125 405.964 14.125C405.074 14.125 404.278 14.3191 403.577 14.7074C402.886 15.0862 402.337 15.6165 401.93 16.2983C401.532 16.9801 401.333 17.7661 401.333 18.6562V31H395.282ZM420.577 31.4261C418.332 31.4261 416.401 30.9716 414.781 30.0625C413.171 29.1439 411.931 27.8466 411.06 26.1705C410.188 24.4848 409.753 22.4915 409.753 20.1903C409.753 17.946 410.188 15.9763 411.06 14.2812C411.931 12.5862 413.157 11.2652 414.739 10.3182C416.33 9.37121 418.195 8.89773 420.335 8.89773C421.775 8.89773 423.115 9.12973 424.355 9.59375C425.605 10.0483 426.694 10.7348 427.622 11.6534C428.56 12.572 429.289 13.7273 429.81 15.1193C430.33 16.5019 430.591 18.1212 430.591 19.9773V21.6392H412.168V17.8892H424.895C424.895 17.018 424.705 16.2462 424.327 15.5739C423.948 14.9015 423.422 14.3759 422.75 13.9972C422.087 13.6089 421.315 13.4148 420.435 13.4148C419.516 13.4148 418.702 13.6278 417.991 14.054C417.291 14.4706 416.741 15.0341 416.344 15.7443C415.946 16.4451 415.742 17.2263 415.733 18.0881V21.6534C415.733 22.733 415.932 23.6657 416.33 24.4517C416.737 25.2377 417.31 25.8438 418.048 26.2699C418.787 26.696 419.663 26.9091 420.676 26.9091C421.348 26.9091 421.964 26.8144 422.523 26.625C423.081 26.4356 423.56 26.1515 423.957 25.7727C424.355 25.3939 424.658 24.9299 424.866 24.3807L430.463 24.75C430.179 26.0947 429.597 27.2689 428.716 28.2727C427.845 29.267 426.718 30.0436 425.335 30.6023C423.962 31.1515 422.376 31.4261 420.577 31.4261Z"
              fill="black" />
          </svg>
        
        </div>
        

        <ul className="text-center">
          <li
            className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-black dark:before:text-white">
            <a className="inline-flex gap-x-2 text-sm text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
              href="#">
              About
            </a>
          </li>

          <li
            className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-black dark:before:text-white">
            <a className="inline-flex gap-x-2 text-sm text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
              href="#">
              Blog
            </a>
          </li>
        </ul>
        
        <div className="text-center md:text-end space-x-2">
          <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-black hover:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-neutral-400"
            href="#">
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
          </a>
          <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-black hover:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-neutral-400"
            href="#">
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>
          <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-black hover:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-neutral-400"
            href="#">
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
       
      </div>
    
    </div>
  </footer>
  )
}

export default footer