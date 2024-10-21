import '../styles/order.css'
function Order(){
    return(
        <div className='div-order'>
            <h1>How to Order Online?</h1>
            <div className='div-instruction'>
                <section>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <rect width="100" height="100" rx="20" fill="white"/>
                        <path d="M37.3688 55.4031H62.6312C63.5916 55.4031 64.5199 55.0877 65.2469 54.5145C65.9738 53.9413 66.451 53.1484 66.5912 52.2805C66.7314 51.4126 66.5254 50.5276 66.0107 49.787C65.4961 49.0463 64.7071 48.4994 63.7876 48.2459V46.5464C63.7837 43.9867 62.8015 41.5086 61.0107 39.54C59.2198 37.5713 56.7326 36.2357 53.9787 35.7637C54.3175 35.1443 54.4774 34.456 54.4431 33.7642C54.4089 33.0725 54.1817 32.4002 53.7831 31.8112C53.3845 31.2222 52.8277 30.736 52.1656 30.3988C51.5035 30.0617 50.758 29.8847 50 29.8847C49.242 29.8847 48.4965 30.0617 47.8344 30.3988C47.1723 30.736 46.6155 31.2222 46.2169 31.8112C45.8183 32.4002 45.5911 33.0725 45.5569 33.7642C45.5226 34.456 45.6825 35.1443 46.0213 35.7637C43.2674 36.2357 40.7802 37.5713 38.9893 39.54C37.1985 41.5086 36.2163 43.9867 36.2124 46.5464V48.2459C35.2929 48.4994 34.5039 49.0463 33.9893 49.787C33.4746 50.5276 33.2686 51.4126 33.4088 52.2805C33.549 53.1484 34.0262 53.9413 34.7531 54.5145C35.4801 55.0877 36.4084 55.4031 37.3688 55.4031ZM50 32.3258C50.3518 32.3258 50.6958 32.4211 50.9883 32.5996C51.2809 32.7782 51.5089 33.032 51.6436 33.3289C51.7782 33.6259 51.8134 33.9526 51.7448 34.2679C51.6761 34.5831 51.5067 34.8727 51.2579 35.1C51.0091 35.3272 50.6921 35.482 50.3471 35.5447C50.002 35.6074 49.6443 35.5752 49.3192 35.4522C48.9942 35.3292 48.7163 35.1209 48.5208 34.8537C48.3254 34.5864 48.221 34.2723 48.221 33.9508C48.2216 33.52 48.4092 33.1069 48.7427 32.8023C49.0762 32.4976 49.5284 32.3262 50 32.3258ZM38.8811 46.5464C38.8839 44.2842 39.8689 42.1154 41.6199 40.5158C43.371 38.9162 45.7452 38.0164 48.2216 38.0138H51.7784C54.2548 38.0164 56.629 38.9162 58.3801 40.5158C60.1311 42.1154 61.1161 44.2842 61.1189 46.5464V48.0897H38.8811V46.5464ZM37.3688 50.5276H62.6312C62.8064 50.5276 62.9799 50.5591 63.1418 50.6204C63.3036 50.6816 63.4507 50.7714 63.5746 50.8846C63.6985 50.9978 63.7968 51.1321 63.8638 51.28C63.9309 51.4279 63.9654 51.5863 63.9654 51.7464C63.9654 51.9064 63.9309 52.0649 63.8638 52.2128C63.7968 52.3607 63.6985 52.495 63.5746 52.6082C63.4507 52.7214 63.3036 52.8111 63.1418 52.8724C62.9799 52.9336 62.8064 52.9652 62.6312 52.9652H37.3688C37.1936 52.9652 37.0201 52.9336 36.8582 52.8724C36.6964 52.8111 36.5493 52.7214 36.4254 52.6082C36.3015 52.495 36.2032 52.3607 36.1362 52.2128C36.0691 52.0649 36.0346 51.9064 36.0346 51.7464C36.0346 51.5863 36.0691 51.4279 36.1362 51.28C36.2032 51.1321 36.3015 50.9978 36.4254 50.8846C36.5493 50.7714 36.6964 50.6816 36.8582 50.6204C37.0201 50.5591 37.1936 50.5276 37.3688 50.5276ZM69.6595 81.7274H45.819C45.4651 81.7274 45.1257 81.8558 44.8755 82.0844C44.6252 82.313 44.4847 82.6231 44.4847 82.9463C44.4847 83.2696 44.6252 83.5797 44.8755 83.8083C45.1257 84.0369 45.4651 84.1653 45.819 84.1653H69.6595C70.0134 84.1653 70.3528 84.0369 70.603 83.8083C70.8533 83.5797 70.9939 83.2696 70.9939 82.9463C70.9939 82.6231 70.8533 82.313 70.603 82.0844C70.3528 81.8558 70.0134 81.7274 69.6595 81.7274ZM69.6595 60.4247H45.819C45.4651 60.4247 45.1257 60.5531 44.8755 60.7817C44.6252 61.0103 44.4847 61.3203 44.4847 61.6436C44.4847 61.9669 44.6252 62.277 44.8755 62.5055C45.1257 62.7341 45.4651 62.8626 45.819 62.8626H69.6595C70.0134 62.8626 70.3528 62.7341 70.603 62.5055C70.8533 62.277 70.9939 61.9669 70.9939 61.6436C70.9939 61.3203 70.8533 61.0103 70.603 60.7817C70.3528 60.5531 70.0134 60.4247 69.6595 60.4247ZM37.8129 74.9013H30.3405C30.1653 74.9013 29.9917 74.9328 29.8298 74.9941C29.6679 75.0554 29.5208 75.1451 29.3969 75.2583C29.273 75.3715 29.1747 75.5059 29.1077 75.6538C29.0406 75.8017 29.0061 75.9602 29.0061 76.1203V82.9463C29.0061 83.1064 29.0406 83.2649 29.1077 83.4128C29.1747 83.5607 29.273 83.6951 29.3969 83.8083C29.5208 83.9215 29.6679 84.0113 29.8298 84.0725C29.9917 84.1338 30.1653 84.1653 30.3405 84.1653H37.8129C37.9881 84.1653 38.1616 84.1338 38.3235 84.0725C38.4854 84.0113 38.6325 83.9215 38.7564 83.8083C38.8804 83.6951 38.9786 83.5607 39.0457 83.4128C39.1127 83.2649 39.1473 83.1064 39.1472 82.9463V76.1203C39.1473 75.9602 39.1127 75.8017 39.0457 75.6538C38.9786 75.5059 38.8804 75.3715 38.7564 75.2583C38.6325 75.1451 38.4854 75.0554 38.3235 74.9941C38.1616 74.9328 37.9881 74.9013 37.8129 74.9013ZM36.4785 81.7274H31.6748V77.3392H36.4785V81.7274ZM75.8865 22.8933H65.6564V11.8441C65.6564 11.3832 65.5338 10.9292 65.2991 10.5212C65.0644 10.1132 64.7246 9.7634 64.3091 9.50194C63.8936 9.24048 63.4148 9.07518 62.9138 9.02026C62.4129 8.96535 61.9048 9.02246 61.4334 9.18669L21.8588 22.9732C21.8532 22.9752 21.848 22.9778 21.8424 22.9798C21.8163 22.9893 21.7908 22.9999 21.7656 23.0108C21.7497 23.0176 21.7338 23.0242 21.7184 23.0315C21.6971 23.0416 21.6766 23.0527 21.656 23.0638C21.6376 23.0737 21.6192 23.0834 21.6015 23.094C21.5856 23.1037 21.5703 23.114 21.5548 23.1243C21.5344 23.1377 21.5139 23.1511 21.4945 23.1654C21.4822 23.1746 21.4706 23.1844 21.4586 23.1939C21.438 23.2104 21.4174 23.2268 21.398 23.2443C21.3869 23.2542 21.3766 23.2649 21.3659 23.2753C21.3475 23.2931 21.329 23.3108 21.3119 23.3296C21.3 23.3425 21.2892 23.3562 21.2779 23.3696C21.2636 23.3865 21.249 23.4034 21.2358 23.421C21.2227 23.4382 21.211 23.4562 21.199 23.474C21.189 23.4888 21.1787 23.5034 21.1694 23.5185C21.1566 23.5394 21.1453 23.5611 21.1339 23.5827C21.1268 23.596 21.1194 23.609 21.1128 23.6225C21.1021 23.6449 21.0929 23.6679 21.0835 23.6909C21.0779 23.7049 21.0718 23.7188 21.0667 23.733C21.059 23.7543 21.0528 23.7761 21.0464 23.798C21.0414 23.8152 21.0361 23.8323 21.0318 23.8498C21.0273 23.8684 21.024 23.8873 21.0205 23.9063C21.0164 23.928 21.0123 23.9497 21.0096 23.9717C21.0076 23.9873 21.0065 24.0031 21.0051 24.0189C21.003 24.0445 21.0013 24.0702 21.0009 24.096C21.0008 24.1014 21 24.1067 21 24.1122V90.26C21 90.4201 21.0345 90.5786 21.1015 90.7265C21.1686 90.8743 21.2669 91.0087 21.3908 91.1219C21.5147 91.2351 21.6618 91.3249 21.8237 91.3862C21.9856 91.4474 22.1591 91.4789 22.3344 91.4789H75.8865C76.712 91.4781 77.5033 91.1781 78.087 90.6449C78.6707 90.1117 78.9991 89.3888 79 88.6347V25.7374C78.9991 24.9834 78.6707 24.2605 78.087 23.7273C77.5033 23.194 76.712 22.8941 75.8865 22.8933ZM62.3845 11.4646C62.4518 11.4411 62.5244 11.4329 62.5959 11.4408C62.6675 11.4486 62.7359 11.4722 62.7953 11.5095C62.8546 11.5469 62.9032 11.5968 62.9367 11.6551C62.9702 11.7134 62.9877 11.7782 62.9877 11.8441V22.8933H29.5783L62.3845 11.4646ZM76.3313 88.6347C76.3312 88.7424 76.2843 88.8457 76.2009 88.9219C76.1175 88.9981 76.0044 89.0409 75.8865 89.041H23.6687V25.3311H75.8865C76.0044 25.3312 76.1175 25.3741 76.2009 25.4503C76.2843 25.5264 76.3312 25.6297 76.3313 25.7374V88.6347ZM69.6595 67.2507H45.819C45.4651 67.2507 45.1257 67.3792 44.8755 67.6078C44.6252 67.8364 44.4847 68.1464 44.4847 68.4697C44.4847 68.793 44.6252 69.103 44.8755 69.3316C45.1257 69.5602 45.4651 69.6886 45.819 69.6886H69.6595C70.0134 69.6886 70.3528 69.5602 70.603 69.3316C70.8533 69.103 70.9939 68.793 70.9939 68.4697C70.9939 68.1464 70.8533 67.8364 70.603 67.6078C70.3528 67.3792 70.0134 67.2507 69.6595 67.2507ZM37.8129 60.4247H30.3405C30.1653 60.4247 29.9917 60.4562 29.8298 60.5174C29.6679 60.5787 29.5208 60.6685 29.3969 60.7817C29.273 60.8949 29.1747 61.0292 29.1077 61.1771C29.0406 61.325 29.0061 61.4835 29.0061 61.6436V68.4697C29.0061 68.6298 29.0406 68.7883 29.1077 68.9362C29.1747 69.0841 29.273 69.2184 29.3969 69.3316C29.5208 69.4448 29.6679 69.5346 29.8298 69.5959C29.9917 69.6571 30.1653 69.6886 30.3405 69.6886H37.8129C37.9881 69.6886 38.1616 69.6571 38.3235 69.5959C38.4854 69.5346 38.6325 69.4448 38.7564 69.3316C38.8804 69.2184 38.9786 69.0841 39.0457 68.9362C39.1127 68.7883 39.1473 68.6298 39.1472 68.4697V61.6436C39.1473 61.4835 39.1127 61.325 39.0457 61.1771C38.9786 61.0292 38.8804 60.8949 38.7564 60.7817C38.6325 60.6685 38.4854 60.5787 38.3235 60.5174C38.1616 60.4562 37.9881 60.4247 37.8129 60.4247ZM36.4785 67.2507H31.6748V62.8626H36.4785V67.2507ZM69.6595 74.9013H45.819C45.4651 74.9013 45.1257 75.0298 44.8755 75.2584C44.6252 75.4869 44.4847 75.797 44.4847 76.1203C44.4847 76.4436 44.6252 76.7536 44.8755 76.9822C45.1257 77.2108 45.4651 77.3392 45.819 77.3392H69.6595C70.0134 77.3392 70.3528 77.2108 70.603 76.9822C70.8533 76.7536 70.9939 76.4436 70.9939 76.1203C70.9939 75.797 70.8533 75.4869 70.603 75.2584C70.3528 75.0298 70.0134 74.9013 69.6595 74.9013Z" fill="#FF6500"/>
                    </svg>
                    <h3>Browse our menu</h3>
                </section>
                <section>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <rect width="100" height="100" rx="20" fill="white"/>
                        <path d="M83.5719 28.1164H76.3748C75.7385 28.1164 75.1283 28.3506 74.6784 28.7675C74.2285 29.1845 73.9758 29.75 73.9758 30.3396C73.9758 30.9292 74.2285 31.4947 74.6784 31.9117C75.1283 32.3286 75.7385 32.5629 76.3748 32.5629H79.7095L70.1133 50.549C69.4241 51.8771 68.3452 52.9985 67.0003 53.7849C65.6553 54.5713 64.0986 54.9908 62.5084 54.9955H33.1922V26.8269C33.2073 25.5238 32.9413 24.2312 32.4099 23.0247C31.8785 21.8183 31.0923 20.7224 30.0975 19.8014C28.0855 17.9944 25.3903 16.9889 22.5885 17.0001H16.399C15.7628 17.0001 15.1526 17.2343 14.7027 17.6513C14.2528 18.0682 14 18.6337 14 19.2233C14 19.813 14.2528 20.3785 14.7027 20.7954C15.1526 21.2124 15.7628 21.4466 16.399 21.4466H22.6125C24.1381 21.4466 25.6059 21.9875 26.7149 22.9584C27.2585 23.4672 27.687 24.0715 27.9754 24.7357C28.2637 25.4 28.4061 26.1109 28.3942 26.8269V56.8185C28.3852 56.9295 28.3852 57.041 28.3942 57.152C28.3942 60.0649 29.6428 62.8584 31.8653 64.9181C34.0879 66.9778 37.1023 68.1349 40.2454 68.1349H69.1777C69.814 68.1349 70.4242 67.9007 70.8741 67.4837C71.324 67.0668 71.5767 66.5013 71.5767 65.9116C71.5767 65.322 71.324 64.7565 70.8741 64.3396C70.4242 63.9226 69.814 63.6884 69.1777 63.6884H40.2454C38.8007 63.6849 37.3923 63.2689 36.2119 62.4972C35.0314 61.7254 34.1362 60.6353 33.6481 59.3753H62.4364C64.926 59.3976 67.3719 58.7691 69.4936 57.5618C71.6152 56.3546 73.3267 54.6175 74.4316 52.5499L85.731 31.3623C85.9216 31.0214 86.0137 30.6405 85.9983 30.2568C85.9829 29.8731 85.8606 29.4997 85.6432 29.1728C85.4258 28.8459 85.1207 28.5768 84.7577 28.3917C84.3947 28.2066 83.9862 28.1117 83.5719 28.1164ZM35.5913 70.3581C34.1678 70.3581 32.7763 70.7493 31.5928 71.4822C30.4092 72.2151 29.4868 73.2568 28.942 74.4755C28.3973 75.6942 28.2548 77.0353 28.5325 78.3291C28.8102 79.6229 29.4956 80.8114 30.5022 81.7441C31.5087 82.6769 32.7911 83.3121 34.1872 83.5695C35.5833 83.8269 37.0304 83.6948 38.3455 83.19C39.6606 82.6851 40.7846 81.8303 41.5754 80.7334C42.3663 79.6366 42.7884 78.3471 42.7884 77.0279C42.7884 75.259 42.0301 73.5625 40.6804 72.3117C39.3307 71.0609 37.5001 70.3581 35.5913 70.3581ZM35.5913 79.2512C35.1168 79.2512 34.653 79.1208 34.2584 78.8765C33.8639 78.6322 33.5564 78.285 33.3749 77.8787C33.1933 77.4725 33.1458 77.0254 33.2383 76.5942C33.3309 76.1629 33.5594 75.7668 33.8949 75.4558C34.2304 75.1449 34.6579 74.9332 35.1233 74.8474C35.5886 74.7616 36.071 74.8056 36.5093 74.9739C36.9477 75.1422 37.3224 75.4271 37.586 75.7927C37.8496 76.1583 37.9903 76.5882 37.9903 77.0279C37.9903 77.6175 37.7376 78.183 37.2876 78.6C36.8377 79.0169 36.2275 79.2512 35.5913 79.2512ZM61.9806 70.3581C60.5572 70.3581 59.1657 70.7493 57.9821 71.4822C56.7986 72.2151 55.8761 73.2568 55.3314 74.4755C54.7866 75.6942 54.6441 77.0353 54.9218 78.3291C55.1995 79.6229 55.885 80.8114 56.8915 81.7441C57.898 82.6769 59.1804 83.3121 60.5765 83.5695C61.9726 83.8269 63.4197 83.6948 64.7348 83.19C66.0499 82.6851 67.174 81.8303 67.9648 80.7334C68.7556 79.6366 69.1777 78.3471 69.1777 77.0279C69.1777 75.259 68.4194 73.5625 67.0697 72.3117C65.72 71.0609 63.8894 70.3581 61.9806 70.3581ZM61.9806 79.2512C61.5061 79.2512 61.0423 79.1208 60.6478 78.8765C60.2533 78.6322 59.9458 78.285 59.7642 77.8787C59.5826 77.4725 59.5351 77.0254 59.6277 76.5942C59.7203 76.1629 59.9487 75.7668 60.2842 75.4558C60.6198 75.1449 61.0472 74.9332 61.5126 74.8474C61.978 74.7616 62.4603 74.8056 62.8987 74.9739C63.3371 75.1422 63.7117 75.4271 63.9753 75.7927C64.239 76.1583 64.3797 76.5882 64.3797 77.0279C64.3797 77.6175 64.1269 78.183 63.677 78.6C63.2271 79.0169 62.6169 79.2512 61.9806 79.2512Z" fill="#FF6500"/>
                        <path d="M52.3845 28.1162C51.7482 28.1162 51.138 28.3504 50.6881 28.7674C50.2382 29.1843 49.9855 29.7498 49.9855 30.3395V37.0092H42.7884C42.1521 37.0092 41.5419 37.2435 41.092 37.6604C40.6421 38.0773 40.3893 38.6428 40.3893 39.2325C40.3893 39.8221 40.6421 40.3876 41.092 40.8045C41.5419 41.2215 42.1521 41.4557 42.7884 41.4557H49.9855V48.1255C49.9855 48.7151 50.2382 49.2806 50.6881 49.6976C51.138 50.1145 51.7482 50.3487 52.3845 50.3487C53.0208 50.3487 53.631 50.1145 54.0809 49.6976C54.5308 49.2806 54.7835 48.7151 54.7835 48.1255V41.4557H61.9806C62.6169 41.4557 63.2271 41.2215 63.677 40.8045C64.1269 40.3876 64.3797 39.8221 64.3797 39.2325C64.3797 38.6428 64.1269 38.0773 63.677 37.6604C63.2271 37.2435 62.6169 37.0092 61.9806 37.0092H54.7835V30.3395C54.7835 29.7498 54.5308 29.1843 54.0809 28.7674C53.631 28.3504 53.0208 28.1162 52.3845 28.1162Z" fill="#FF6500"/>
                    </svg>
                    <h3>Add your order</h3>
                </section>
                <section>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <rect width="100" height="100" rx="20" fill="white"/>
                        <path d="M83.1923 68.1899H33.1405C31.9051 64.2315 27.9744 61.3056 23.2949 61.3056C17.6046 61.3056 13 65.5395 13 70.7715C13 76.0036 17.6046 80.2374 23.2949 80.2374C27.9744 80.2374 31.9051 77.3116 33.1405 73.3531H83.1923C84.7272 73.3531 86 72.1828 86 70.7715C86 69.3602 84.7272 68.1899 83.1923 68.1899ZM23.2949 75.0742C20.7118 75.0742 18.6154 73.1466 18.6154 70.7715C18.6154 68.3965 20.7118 66.4689 23.2949 66.4689C25.8779 66.4689 27.9744 68.3965 27.9744 70.7715C27.9744 73.1466 25.8779 75.0742 23.2949 75.0742ZM83.1923 47.5371H66.8328C65.5974 43.5786 61.6667 40.6528 56.9872 40.6528C52.3077 40.6528 48.3769 43.5786 47.1415 47.5371H15.8077C14.2728 47.5371 13 48.7074 13 50.1187C13 51.53 14.2728 52.7003 15.8077 52.7003H47.1415C48.3769 56.6588 52.3077 59.5846 56.9872 59.5846C61.6667 59.5846 65.5974 56.6588 66.8328 52.7003H83.1923C84.7272 52.7003 86 51.53 86 50.1187C86 48.7074 84.7272 47.5371 83.1923 47.5371ZM56.9872 54.4214C54.4041 54.4214 52.3077 52.4938 52.3077 50.1187C52.3077 47.7436 54.4041 45.816 56.9872 45.816C59.5703 45.816 61.6667 47.7436 61.6667 50.1187C61.6667 52.4938 59.5703 54.4214 56.9872 54.4214ZM15.8077 32.0475H24.68C25.9154 36.0059 29.8462 38.9318 34.5256 38.9318C39.2051 38.9318 43.1359 36.0059 44.3713 32.0475H83.1923C84.7272 32.0475 86 30.8772 86 29.4659C86 28.0546 84.7272 26.8843 83.1923 26.8843H44.3713C43.1359 22.9258 39.2051 20 34.5256 20C29.8462 20 25.9154 22.9258 24.68 26.8843H15.8077C14.2728 26.8843 13 28.0546 13 29.4659C13 30.8772 14.2728 32.0475 15.8077 32.0475ZM34.5256 25.1632C37.1087 25.1632 39.2051 27.0908 39.2051 29.4659C39.2051 31.841 37.1087 33.7685 34.5256 33.7685C31.9426 33.7685 29.8462 31.841 29.8462 29.4659C29.8462 27.0908 31.9426 25.1632 34.5256 25.1632Z" fill="#FF6500"/>
                    </svg>
                    <h3>Customize your order</h3>
                </section>
                <section>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <rect width="100" height="100" rx="20" fill="white"/>
                        <path d="M69.7486 54.7669C69.4011 54.5988 69.015 54.5109 68.623 54.5105C68.1743 54.5098 67.734 54.6238 67.3507 54.8401C66.9675 55.0564 66.656 55.3665 66.4507 55.7363C63.6395 60.7813 56.986 63.6744 49.5006 63.6744C41.8407 63.6744 35.0476 60.7395 32.5961 55.8245C32.1973 55.0268 31.3264 54.5115 30.3771 54.5115C30.0238 54.5115 29.6808 54.5807 29.3517 54.7203C28.1309 55.2447 27.5963 56.5926 28.1605 57.7258C31.3958 64.2118 39.9717 68.2418 49.5006 68.2418C58.7941 68.2418 67.1517 64.3479 70.7922 57.8145C71.4097 56.7067 70.9394 55.3385 69.7486 54.7669ZM73.6489 46.4285C72.0347 44.4901 69.9881 43.1208 66.7711 43.1208C63.5541 43.1208 61.5249 44.4872 59.9002 46.4204C59.0528 47.4284 59.2033 48.7945 60.4772 49.5901C60.926 49.8703 61.4547 49.972 62.0063 49.972C62.8372 49.9719 63.6245 49.671 64.1117 49.0901C64.643 48.4571 65.2987 47.6883 66.7713 47.6883C68.2514 47.6883 68.9016 48.4535 69.425 49.0838C69.9145 49.6696 70.7041 49.972 71.5376 49.972C72.0892 49.972 72.6168 49.871 73.0658 49.5891C74.2288 48.8566 74.4905 47.4385 73.6489 46.4285ZM39.1488 46.4285C37.5347 44.4901 35.4881 43.1208 32.2711 43.1208C29.0541 43.1208 27.0248 44.4872 25.4001 46.4204C24.5528 47.4284 24.7031 48.7945 25.9772 49.5901C26.426 49.8703 26.9546 49.972 27.5061 49.972C28.337 49.9719 29.1244 49.671 29.6114 49.0901C30.1429 48.4571 30.7985 47.6883 32.2711 47.6883C33.7512 47.6883 34.4015 48.4535 34.9248 49.0838C35.4141 49.6696 36.2038 49.972 37.0373 49.972C37.589 49.972 38.1165 49.871 38.5655 49.5891C39.7288 48.8566 39.9905 47.4385 39.1488 46.4285Z" fill="#FF6500"/>
                        <path d="M49.5 18C30.4461 18 15 32.3144 15 49.9722C15 67.6299 30.4461 81.9443 49.5 81.9443C68.5539 81.9443 84 67.6299 84 49.9722C84 32.3144 68.5539 18 49.5 18ZM70.4102 69.3503C64.8248 74.5262 57.3988 77.3769 49.5 77.3769C41.6012 77.3769 34.1752 74.5262 28.5898 69.3503C23.0046 64.1741 19.9286 57.2922 19.9286 49.9722C19.9286 42.6521 23.0046 35.7702 28.5898 30.594C34.1752 25.4181 41.6012 22.5675 49.5 22.5675C57.3988 22.5675 64.8248 25.4181 70.4102 30.594C75.9954 35.7702 79.0714 42.6521 79.0714 49.9722C79.0714 57.2922 75.9954 64.1741 70.4102 69.3503Z" fill="#FF6500"/>
                    </svg>
                    <h3>Enjoy your meal</h3>
                </section>
            </div>
        </div>
    );
}

export default Order