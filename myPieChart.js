const PieChart = (w=>{
	const {
		document:d,
		Object:{entries},
		Math:{PI,cos,sin}
	} = w,
		PI2 = 2 * PI,
		frag = d.createDocumentFragment(),
		nestSvgEl = (node,tag,attrs) => {
			const e = node.appendChild(d.createElementNS('http://www.w3.org/2000/svg',tag));
			if(attrs){
				for (const attr of entries(attrs)) {
					e.setAttribute(...attr)
				}
			}
			return e
		};
	return params => {
		const {
			data,
			rotate,//deg
			size = 100,
			width = size,
			format = x=>x,
			precision = 4
		} = params,
			sum = data.reduce((total,[value])=>total+value,0);
		if(sum){
			const factor = PI2/sum,
				h = size/2,
				fix = n=>n.toFixed(precision),
				ps = n=>[
					fix(h+h*cos(n)),
					fix(h-h*sin(n))
				].join('\u0020'),
				svg = nestSvgEl(frag,'svg',{
					viewBox:`0 0 ${size} ${size}`,
					style:`width:${width}px`
				});
			let arch = rotate ? (PI2*rotate)/360:0, α=ps(arch);
			for(const [value,label,color] of data) {
				if(value){
					const rad = factor*value;
					nestSvgEl(
						nestSvgEl(svg,'path',{
							d:`M${α} A ${h} ${h} 1 ${rad>PI?1:0} 0 ${α=ps(arch+=rad)} L ${h} ${h} Z`,
							fill:color
						}),
						'title'
					).appendChild(d.createTextNode(format(value,sum,label)))
				}
			}
			return svg
		}
	}
})(window);
