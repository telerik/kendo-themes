
export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">
            <section>
                <div className="k-gauge k-arcgauge">
                    <div className="k-arcgauge-label" style={{top: "125.125px", left: "85px"}}>20</div>
                    <div style={{width: "200px", height: "200px"}}>
                        <svg style={{width: "100%", height: "100%", overflow: "hidden", left: "-0.5px", top: "0px"}}>
                            <g>
                                <path d="M0 0 L 200 0 200 200 0 200Z" stroke="none" fill="none"></path>
                                <path d="M26.986 92.077 C 38.096 76.785 54.134 65.133 72.111 59.292 90.088 53.451 109.912 53.451 127.889 59.292 145.866 65.133 161.904 76.785 173.014 92.077 184.124 107.369 190.25 126.223 190.25 145.125" stroke="var(--kendo-chart-gauge-track)" stroke-width="9.5" stroke-linecap="round" fill="none"></path>
                                <path d="M9.75 145.125 C 9.75 126.223 15.876 107.369 26.986 92.077" stroke="var(--kendo-chart-gauge-pointer)" stroke-width="9.5" stroke-linecap="round" fill="none"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-gauge k-circulargauge">
                    <div className="k-circulargauge-label" style={{top: "90px", left: "85px"}}>20</div>
                    <div style={{width: "200px", height: "200px"}}>
                        <svg style={{width: "100%", height: "100%", overflow: "hidden"}}>
                            <g>
                                <path d="M0 0 L 200 0 200 200 0 200Z" stroke="none" fill="none"></path>
                                <g>
                                    <path d="M185.833 72.111 C 192.508 92.656 191.478 115.607 182.987 135.471 174.497 155.334 158.621 171.94 139.158 181.312 119.695 190.685 96.814 192.745 75.99 186.998 55.166 181.251 36.58 167.747 24.68 149.718 12.779 131.69 7.667 109.292 10.567 87.885 13.467 66.479 24.353 46.248 40.621 32.035 56.889 17.822 78.398 9.75 100 9.75" stroke="var(--kendo-chart-gauge-track)" stroke-width="9.5" stroke-linecap="round" fill="none"></path>
                                    <path d="M100 9.75 C 118.902 9.75 137.756 15.876 153.048 26.986 168.34 38.096 179.992 54.134 185.833 72.111" stroke="var(--kendo-chart-gauge-pointer)" stroke-width="9.5" stroke-linecap="round" fill="none"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-gauge">
                    <div className="k-gauge">
                        <div style={{width: "350px", height: "200px"}}>
                            <svg style={{width: "100%", height: "100%", overflow: "hidden", left: "-0.5px", top: "0px"}}>
                            <g>
                                <path d="M0 0 L 414 0 414 200 0 200Z" stroke="none" fill="none"></path>
                                <g>
                                    <g>
                                        <path d="M124.728 147.5 L 137.718 140" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-27.293657,47.387)"></path>
                                        <path d="M116.65 70.643 L 130.915 75.279" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-29.973497,21.89002)"></path>
                                        <path d="M168.36 13.213 L 174.461 26.916" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-12.818712,2.837701)"></path>
                                        <path d="M245.64 13.213 L 239.539 26.916" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,12.818712,2.837701)"></path>
                                        <path d="M297.35 70.643 L 283.085 75.279" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,29.973497,21.89002)"></path>
                                        <path d="M289.272 147.5 L 276.282 140" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,27.293657,47.387)"></path>
                                    </g>
                                    <g>
                                        <path d="M121.041 140.449 L 130.09 136.191" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-28.516529,45.04786)"></path>
                                        <path d="M117.958 133.114 L 127.331 129.629" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-29.539379,42.614597)"></path>
                                        <path d="M115.5 125.547 L 125.131 122.858" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-30.355031,40.104277)"></path>
                                        <path d="M113.683 117.801 L 123.506 115.927" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-30.957765,37.53451)"></path>
                                        <path d="M112.52 109.93 L 122.466 108.885" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-31.343352,34.923319)"></path>
                                        <path d="M112.021 101.99 L 122.019 101.78" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-31.509088,32.289021)"></path>
                                        <path d="M112.187 94.035 L 122.168 94.663" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-31.45381,29.650094)"></path>
                                        <path d="M113.019 86.122 L 122.912 87.583" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-31.177907,27.025047)"></path>
                                        <path d="M114.51 78.307 L 124.246 80.59" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-30.683313,24.432294)"></path>
                                        <path d="M119.423 63.186 L 128.642 67.061" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-29.053439,19.416059)"></path>
                                        <path d="M122.811 55.987 L 131.673 60.62" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-27.929592,17.027762)"></path>
                                        <path d="M126.789 49.096 L 135.232 54.455" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-26.609839,14.741883)"></path>
                                        <path d="M131.33 42.563 L 139.295 48.609" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-25.103437,12.574454)"></path>
                                        <path d="M136.401 36.433 L 143.833 43.124" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-23.420952,10.54068)"></path>
                                        <path d="M141.968 30.748 L 148.813 38.038" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-21.574187,8.654825)"></path>
                                        <path d="M147.991 25.549 L 154.202 33.386" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-19.576093,6.930117)"></path>
                                        <path d="M154.428 20.872 L 159.962 29.202" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-17.440688,5.378654)"></path>
                                        <path d="M161.233 16.751 L 166.051 25.514" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-15.182949,4.011319)"></path>
                                        <path d="M175.758 10.284 L 179.046 19.728" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-10.364561,1.866034)"></path>
                                        <path d="M183.374 7.985 L 185.861 17.67" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-7.83771,1.103133)"></path>
                                        <path d="M191.157 6.33 L 192.825 16.19" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-5.255884,0.554349)"></path>
                                        <path d="M199.051 5.333 L 199.887 15.298" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,-2.637191,0.223531)"></path>
                                        <path d="M207 5 L 207 15" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,0,0.113)"></path>
                                        <path d="M214.949 5.333 L 214.113 15.298" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,2.637191,0.223531)"></path>
                                        <path d="M222.843 6.33 L 221.175 16.19" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,5.255884,0.554349)"></path>
                                        <path d="M230.626 7.985 L 228.139 17.67" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,7.83771,1.103133)"></path>
                                        <path d="M238.242 10.284 L 234.954 19.728" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,10.364561,1.866034)"></path>
                                        <path d="M252.767 16.751 L 247.949 25.514" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,15.182949,4.011319)"></path>
                                        <path d="M259.572 20.872 L 254.038 29.202" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,17.440688,5.378654)"></path>
                                        <path d="M266.009 25.549 L 259.798 33.386" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,19.576093,6.930117)"></path>
                                        <path d="M272.032 30.748 L 265.187 38.038" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,21.574187,8.654825)"></path>
                                        <path d="M277.599 36.433 L 270.167 43.124" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,23.420952,10.54068)"></path>
                                        <path d="M282.67 42.563 L 274.705 48.609" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,25.103437,12.574454)"></path>
                                        <path d="M287.211 49.096 L 278.768 54.455" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,26.609839,14.741883)"></path>
                                        <path d="M291.189 55.987 L 282.327 60.62" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,27.929592,17.027762)"></path>
                                        <path d="M294.577 63.186 L 285.358 67.061" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,29.053439,19.416059)"></path>
                                        <path d="M299.49 78.307 L 289.754 80.59" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,30.683313,24.432294)"></path>
                                        <path d="M300.981 86.122 L 291.088 87.583" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,31.177907,27.025047)"></path>
                                        <path d="M301.813 94.035 L 291.832 94.663" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,31.45381,29.650094)"></path>
                                        <path d="M301.979 101.99 L 291.981 101.78" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,31.509088,32.289021)"></path>
                                        <path d="M301.48 109.93 L 291.534 108.885" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,31.343352,34.923319)"></path>
                                        <path d="M300.317 117.801 L 290.494 115.927" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,30.957765,37.53451)"></path>
                                        <path d="M298.5 125.547 L 288.869 122.858" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,30.355031,40.104277)"></path>
                                        <path d="M296.042 133.114 L 286.669 129.629" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,29.539379,42.614597)"></path>
                                        <path d="M292.959 140.449 L 283.91 136.191" stroke="#1D1B20" stroke-width="0.5" fill="none" transform="matrix(1,0,0,1,28.516529,45.04786)"></path>
                                    </g>
                                </g>
                                <g transform="matrix(-0.406737,-0.913545,0.913545,-0.406737,170.94541,374.271247)">
                                    <path d="M323.516 131.629 L 207 128.629 207 134.629Z" stroke="var(--kendo-chart-gauge-pointer)" stroke-width="0.5" fill="var(--kendo-chart-gauge-pointer)"></path>
                                    <circle cx="207" cy="131.62900000000002" r="6" stroke="var(--kendo-chart-gauge-pointer)" fill="var(--kendo-chart-gauge-pointer)"></circle>
                                </g>
                                <g>
                                    <g transform="matrix(1,0,0,1,-27.293657,47.387)">
                                        <path d="M138.713 125.5 L 149.713 125.5 149.713 143.5 138.713 143.5Z" stroke="none" fill="none"></path>
                                        <path d="M138.713 125.5 L 149.713 125.5 149.713 143.5 138.713 143.5Z" stroke="none" fill="none"></path>
                                        <text x="140.71315822562818" y="138.5" stroke="none" fill="#1D1B20" style={{font: "12px sans-serif", whiteSpace: "pre"}}>0</text>
                                    </g>
                                    <g transform="matrix(1,0,0,1,-29.973497,21.89002)">
                                        <path d="M132.402 69.678 L 149.402 69.678 149.402 87.678 132.402 87.678Z" stroke="none" fill="none"></path>
                                        <path d="M132.402 69.678 L 149.402 69.678 149.402 87.678 132.402 87.678Z" stroke="none" fill="none"></path>
                                        <text x="134.4015721174868" y="82.67782738812863" stroke="none" fill="#1D1B20" style={{font: "12px sans-serif", whiteSpace: "pre"}}>10</text></g>
                                        <g transform="matrix(1,0,0,1,-12.818712,2.837701)">
                                            <path d="M170.232 27.965 L 187.232 27.965 187.232 45.965 170.232 45.965Z" stroke="none" fill="none"></path>
                                            <path d="M170.232 27.965 L 187.232 27.965 187.232 45.965 170.232 45.965Z" stroke="none" fill="none"></path>
                                            <text x="172.2318033062319" y="40.96536342266053" stroke="none" fill="#1D1B20" style={{font: "12px sans-serif", whiteSpace: "pre"}}>20</text></g>
                                            <g transform="matrix(1,0,0,1,12.818712,2.837701)">
                                                <path d="M226.768 27.965 L 243.768 27.965 243.768 45.965 226.768 45.965Z" stroke="none" fill="none"></path>
                                                <path d="M226.768 27.965 L 243.768 27.965 243.768 45.965 226.768 45.965Z" stroke="none" fill="none"></path>
                                                <text x="228.7681966937681" y="40.96536342266053" stroke="none" fill="#1D1B20" style={{font: "12px sans-serif", whiteSpace: "pre"}}>30</text>
                                            </g>
                                            <g transform="matrix(1,0,0,1,29.973497,21.89002)">
                                                <path d="M264.598 69.678 L 281.598 69.678 281.598 87.678 264.598 87.678Z" stroke="none" fill="none"></path>
                                                <path d="M264.598 69.678 L 281.598 69.678 281.598 87.678 264.598 87.678Z" stroke="none" fill="none"></path>
                                                <text x="266.5984278825132" y="82.6778273881286" stroke="none" fill="#1D1B20" style={{font: "12px sans-serif", whiteSpace: "pre"}}>40</text>
                                            </g>
                                            <g transform="matrix(1,0,0,1,27.293657,47.387)">
                                                <path d="M258.689 125.5 L 275.689 125.5 275.689 143.5 258.689 143.5Z" stroke="none" fill="none"></path>
                                                <path d="M258.689 125.5 L 275.689 125.5 275.689 143.5 258.689 143.5Z" stroke="none" fill="none"></path>
                                                <text x="260.6887655630185" y="138.5" stroke="none" fill="#1D1B20" style={{font: "12px sans-serif", whiteSpace: "pre"}}>50</text>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                </div>
            </section>

            <section>
                <div className="k-gauge">
                    <div style={{width: "245px", height: "200px"}}>
                        <svg style={{width: "100%", height: "100%", overflow: "hidden", left: "-0.5px", top: "0px"}}>
                            <g>
                                <g>
                                    <g><path d="M221.25 6 L 221.25 194" stroke="#1D1B20" stroke-width="0.5" fill="none"></path></g>
                                    <g>
                                        <g>
                                            <path d="M190.25 185 L 201.25 185 201.25 203 190.25 203Z" stroke="none" fill="none"></path>
                                            <path d="M190.25 185 L 201.25 185 201.25 203 190.25 203Z" stroke="none" fill="none"></path>
                                            <text x="192.25" y="198" stroke="none" fill="#1D1B20" style={{font: "12px sans-serif", whiteSpace: "pre"}}>0</text>
                                        </g>
                                        <g>
                                            <path d="M184.25 147.4 L 201.25 147.4 201.25 165.4 184.25 165.4Z" stroke="none" fill="none"></path>
                                            <path d="M184.25 147.4 L 201.25 147.4 201.25 165.4 184.25 165.4Z" stroke="none" fill="none"></path>
                                            <text x="186.25" y="160.4" stroke="none" fill="#1D1B20" style={{font: "12px sans-serif", whiteSpace: "pre"}}>10</text>
                                        </g>
                                    <g>
                                        <path d="M184.25 109.8 L 201.25 109.8 201.25 127.8 184.25 127.8Z" stroke="none" fill="none"></path>
                                        <path d="M184.25 109.8 L 201.25 109.8 201.25 127.8 184.25 127.8Z" stroke="none" fill="none"></path>
                                        <text x="186.25" y="122.8" stroke="none" fill="#1D1B20" style={{font: "12px sans-serif", whiteSpace: "pre"}}>20</text>
                                    </g>
                                    <g>
                                        <path d="M184.25 72.2 L 201.25 72.2 201.25 90.2 184.25 90.2Z" stroke="none" fill="none"></path>
                                        <path d="M184.25 72.2 L 201.25 72.2 201.25 90.2 184.25 90.2Z" stroke="none" fill="none"></path>
                                        <text x="186.25" y="85.2" stroke="none" fill="#1D1B20" style={{font: "12px sans-serif", whiteSpace: "pre"}}>30</text>
                                    </g>
                                    <g>
                                        <path d="M184.25 34.6 L 201.25 34.6 201.25 52.6 184.25 52.6Z" stroke="none" fill="none"></path>
                                        <path d="M184.25 34.6 L 201.25 34.6 201.25 52.6 184.25 52.6Z" stroke="none" fill="none"></path>
                                        <text x="186.25" y="47.6" stroke="none" fill="#1D1B20" style={{font: "12px sans-serif", whiteSpace: "pre"}}>40</text></g>
                                        <g>
                                            <path d="M184.25 -3 L 201.25 -3 201.25 15 184.25 15Z" stroke="none" fill="none"></path>
                                            <path d="M184.25 -3 L 201.25 -3 201.25 15 184.25 15Z" stroke="none" fill="none"></path>
                                            <text x="186.25" y="10" stroke="none" fill="#1D1B20" style={{font: "12px sans-serif", whiteSpace: "pre"}}>50</text>
                                        </g>
                                    </g>
                                    <g>
                                        <path d="M206.25 194 L 221.25 194" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M206.25 156.4 L 221.25 156.4" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M206.25 118.8 L 221.25 118.8" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M206.25 81.2 L 221.25 81.2" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M206.25 43.6 L 221.25 43.6" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M206.25 6 L 221.25 6" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 190.24 L 221.25 190.24" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 186.48 L 221.25 186.48" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 182.72 L 221.25 182.72" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 178.96 L 221.25 178.96" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 175.2 L 221.25 175.2" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 171.44 L 221.25 171.44" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 167.68 L 221.25 167.68" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 163.92 L 221.25 163.92" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 160.16 L 221.25 160.16" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 152.64 L 221.25 152.64" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 148.88 L 221.25 148.88" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 145.12 L 221.25 145.12" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 141.36 L 221.25 141.36" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 137.6 L 221.25 137.6" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 133.84 L 221.25 133.84" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 130.08 L 221.25 130.08" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 126.32 L 221.25 126.32" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 122.56 L 221.25 122.56" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 115.04 L 221.25 115.04" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 111.28 L 221.25 111.28" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 107.52 L 221.25 107.52" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 103.76 L 221.25 103.76" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 100 L 221.25 100" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 96.24 L 221.25 96.24" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 92.48 L 221.25 92.48" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 88.72 L 221.25 88.72" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 84.96 L 221.25 84.96" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 77.44 L 221.25 77.44" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 73.68 L 221.25 73.68" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 69.92 L 221.25 69.92" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 66.16 L 221.25 66.16" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 62.4 L 221.25 62.4" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 58.64 L 221.25 58.64" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 54.88 L 221.25 54.88" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 51.12 L 221.25 51.12" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 47.36 L 221.25 47.36" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 39.84 L 221.25 39.84" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 36.08 L 221.25 36.08" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 32.32 L 221.25 32.32" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 28.56 L 221.25 28.56" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 24.8 L 221.25 24.8" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 21.04 L 221.25 21.04" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 17.28 L 221.25 17.28" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 13.52 L 221.25 13.52" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                        <path d="M211.25 9.76 L 221.25 9.76" stroke="#1D1B20" stroke-width="0.5" fill="none"></path>
                                    </g>
                                </g>
                                <g>
                                    <path d="M224.25 194 L 224.25 118.8 228.75 118.8 228.75 194Z" stroke="var(--kendo-chart-gauge-pointer)" stroke-width="1" stroke-opacity="1" fill="var(--kendo-chart-gauge-pointer)" fill-opacity="1"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    </>
);
