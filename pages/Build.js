import React, { useState } from "react";

const Build = () => {
	const chapters = Array.from({ length: 8 }, (_, i) => `Act ${i + 1}`)
	const [active, setActive] = useState("Act 1");

	return (
		<div
			className={
				"bg-black bg-fixed bg-cover bg-poe bg-no-repeat pt-16 h-full min-h-screen"
			}
		>
			<h1 className={ "w-full h-auto text-center text-2xl text-yellow-300 py-4" }>禁忌聖域 3.20</h1>
			<div className={ "flex flex-wrap justify-center py-5" }>
				{
					chapters.map((title) => (
						<span
							key={title}
							className={
								`px-5 cursor-pointer ${active === title ? "text-yellow-500" : "text-white"}`
							}
							onClick={() => setActive(title)}
						>
							{title}
						</span>
					))
				}
			</div>
			<div className={ "container mx-auto flex flex-wrap" }>
				<div className={ "sm:w-2/4 w-full" }>
					<h2 className={ "text-green-400 text-xl text-center" }>追獵毒藥</h2>
					<h3 className={ "text-white text-lg text-center" }>特色：打王</h3>
					<h2 className={ "text-yellow-500 text-xl" }>{active}</h2>
					<div className={ "content min-h-full" }>
						{
							(() => {
								switch (active) {
									case 'Act 1':
										return (
											<div className={ "text-center text-2xl text-white" }>
												<p className={ "p-2" }>
													<span className={ "text-green-500" }>腐蝕箭矢 + 穿透 + 猛攻</span>
													<span className={ "text-blue-500 ml-5" }>霜濂之瞬</span>
												</p>
												<p className={ "p-2" }>
													<span className={ "text-green-500" }>放血 + </span>
													<span className={ "text-red-500" }>機率流血</span>
													<span className={ "text-red-500 ml-5" }>戰爭之旗</span>
													<span>(打典獄長)</span>
												</p>
												<p className={ "p-2" }>
													<span className={ "text-green-500" }>毒藥 + 低階齊射 + 猛攻</span>
													<span>{ "(12等改成)" }</span>
													<span className={ "text-green-500" }>凋零之步</span>
												</p>
												<p className={ "p-2" }>
													<span className={ "text-green-500" }>精準</span>
													<span className={ "px-2" }>/</span>
													<span className={ "text-red-500" }>活力(看個人)</span>
												</p>
											</div>
										)
									case 'Act 2':
										return (
											<div className={ "text-center text-2xl text-white" }>
												<p className={ "p-2" }>
													<span className={ "text-green-500" }>痛苦之捷</span>
													<span className={ "text-green-500 ml-5" }>鮮血狂怒</span>
												</p>
											</div>
										)
									case 'Act 3':
										return (
											<div className={ "text-center text-2xl text-white" }>
												<p className={ "p-2" }>
													<span className={ "text-blue-500" }>絕望詛咒</span>
													<span className={ "text-green-500 ml-5" }>病疫之難</span>
													<span className={ "text-green-500 ml-5" }>優雅</span>
												</p>
												<p className={ "p-2" }>
													<span className={ "text-red-500" }>重盾衝鋒 + </span>
													<span className={ "text-green-500" }>快速攻擊</span>
													<span className={ "text-blue-500 ml-5" }>烈焰衝刺(替換冰衝)</span>
												</p>
												<p className={ "p-2" }>
													<span className={ "text-green-500" }>毒藥 + 低階齊射 + 猛攻 + 低階多重投射</span>
												</p>
											</div>
										)
									case 'Act 4':
										return (
											<div className={ "text-center text-2xl text-white" }>
												<p className={ "p-2" }>
													<span className={ "text-green-500" }>毒藥 + 高階齊射 + 猛攻 + 高階多重投射</span>
												</p>
												<p className={ "p-2" }>
													<span className={ "text-green-500" }>毒藥 + 高階齊射 + 猛攻 + 虛空操作</span>
													<span className={ "px-2" }>/</span>
													<span className={ "text-blue-500 ml-5" }>無邊異能 + </span>
													<span className={ "text-green-500" }>高階多重投射</span>
												</p>
											</div>
										)
									default:
										return ""
								}
							})()
						}
					</div>
					<div className={ "text-yellow-500 text-xl text-center" }>
						<a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=pOaLSQ7Npeg&t=10s">
							資料來源 Yotuber Change
						</a>
					</div>
				</div>
				<div className={ "sm:w-2/4 w-full" }>
					<h2 className={ "text-green-400 text-xl text-center" }>秘術毒藥</h2>
					<h3 className={ "text-white text-lg text-center" }>特色：刷圖效率，打王稍弱於追獵</h3>
					<h2 className={ "text-yellow-500 text-xl" }>{active}</h2>
					<div className={ "content min-h-full" }>
						{
							(() => {
								switch (active) {
									case 'Act 1':
										return (
											<div className={ "text-center text-2xl text-white" }>
												<p className={ "p-2" }>
													<span className={ "text-blue-500" }>熔岩翻滾 + 密能波動 + </span>
													<span className={ "text-green-500" }>猛攻(可開貴族拿)</span>
												</p>
												<p className={ "p-2" }>
													<span className={ "text-red-500" }>火舌圖騰</span>
													<span className={ "text-blue-500" }> + 召喚幻影 + 燃燒輔助</span>
												</p>
												<p className={ "p-2" }>
													<span className={ "text-blue-500" }>烈焰之牆</span>
												</p>
												<p className={ "p-2" }>
													<span className={ "text-blue-500" }>{ "霜濂之瞬 => 烈焰衝刺" }</span>
												</p>
												<p className={ "p-2" }>
													配方杖：魔法法杖 + 對應屬性戒 + 改造石(8、12、20等)
												</p>
											</div>
										)
									case 'Act 2':
										return (
											<div className={ "text-center text-2xl text-white" }>
												<p className={ "p-2" }>
													<span className={ "text-red-500" }>灰燼之捷</span>
													<span className={ "text-blue-500 ml-5" }>召喚探測機獸</span>
												</p>
												<p className={ "p-2" }>
													<span className={ "text-blue-500" }>熔岩翻滾(信念湧浪) + 快速施放 + </span>
													<span className={ "text-green-500" }>猛攻</span>
												</p>
												<p className={ "p-2" }>
													<span className={ "text-blue-500" }>烈焰衝刺 + 秘能波動</span>
													<span className={ "text-green-500 ml-5" }>褻瀆</span>
												</p>
											</div>
										)
										case 'Act 3':
											return (
												<div className={ "text-center text-2xl text-white" }>
													<p className={ "p-2" }>
														<span className={ "text-green-500" }>熔岩送葬 + 低階多重投射</span>
														<span className={ "text-blue-500" }> + 集中效應 + 元素集中</span>
													</p>
													<p className={ "p-2" }>
														<span className={ "text-blue-500" }>末日烙印 + 燃燒輔助 + 快速施放 + </span>
														<span className={ "text-green-500" }>猛攻</span>
													</p>
													<p className={ "p-2" }>
														<span className={ "text-blue-500" }>{ "召喚探測機獸 => 元素淨化" }</span>
													</p>
													<p className={ "p-2" }>
														<span className={ "text-blue-500" }>易燃詛咒</span>
													</p>
												</div>
											)
										case 'Act 4':
											return (
												<div className={ "text-center text-2xl text-white" }>
													<p className={ "text-right text-3xl" }>換掉熔岩球和圖騰</p>
													<p className={ "p-2" }>
														<span className={ "text-green-500" }>熔岩送葬 + 高階多重投射</span>
														<span className={ "text-blue-500" }> + 集中效應 + 犧牲</span>
													</p>
													<p className={ "p-2" }>
														<span className={ "text-blue-500" }>末日烙印 + 燃燒輔助 + 點燃擴散 + </span>
														<span className={ "text-green-500" }>猛攻</span>
													</p>
												</div>
											)
										case 'Act 6':
											return (
												<div className={ "text-center text-2xl text-white" }>
													<p className={ "text-right text-3xl" }>關鍵珠寶帶著練</p>
													<p className={ "p-2" }>
														<span className={ "text-green-500" }>毒藥</span>
														<span className={ "text-green-500 ml-5" }>病疫之難</span>
														<span className={ "text-green-500 ml-5" }>凋零之步</span>
													</p>
													<p className={ "p-2" }>
														<span className={ "text-red-500" }>重盾衝鋒 + </span>
														<span className={ "text-green-500" }>快速攻擊</span>
													</p>
												</div>
											)
										case 'Act 8':
											return (
												<div className={ "text-center text-2xl text-white" }>
													<p className={ "text-right text-3xl" }>轉型關鍵期</p>
													<p className={ "p-2" }>
														<span className={ "text-green-500" }>毒藥 + 高階齊射 + 高階多重投射</span>
														<span className={ "text-blue-500 ml-5" }>無邊異能</span>
													</p>
													<p className={ "p-2" }>
														<span className={ "text-green-500" }>病疫之難 + 凋零之步 + </span>
														<span className={ "text-blue-500" }>增大範圍</span>
													</p>
													<p className={ "p-2" }>
														<span className={ "text-red-500" }>重盾衝鋒 + </span>
														<span className={ "text-green-500" }>快速攻擊</span>
													</p>
													<p>
														<span className={ "text-green-500" }>精準</span>
														<span className={ "text-green-500 ml-5" }>優雅</span>
													</p>
												</div>
											)
									default:
										return ""
								}
							})()
						}
					</div>
					<div className={ "text-yellow-500 text-xl text-center" }>
						<a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=rPkHQ8t1cgQ">
							資料來源 Yotuber Change
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Build;