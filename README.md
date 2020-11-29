# Js-SVG-PieChart
Generate minimalistic pie chart -with tooltips- from some data.

//#1
```
				const chart = PieChart({
					data: [
						[666, 'label1', '#006bff'],
						[1266, 'label1', '#ff5722'],
						[123, 'label2', '#eee'],
					],
				});
				document.body.appendChild(chart);
```

//#2
```
			document.body.appendChild(PieChart({
				data: [
					[666, 'label1', '#006bff'],
					[1266, 'label1', '#ff5722'],
					[123, 'label2', '#eee'],
				],
				format: (value,total,label)=>{
					const n=(value / total * 100).toFixed(1);
					const last = n.slice(-1);
					return (last !=='0' ? n: n.slice(0,-2)) +'%';
				},
				size:200
			}));
```

//#3
```
				document.body.appendChild(PieChart({
					data: [
						[666, 'label1', '#006bff'],
						[1266, 'label1', '#ff5722'],
						[123, 'label2', '#eee'],
					],
					format: (value,total,label)=>label,
					rotate:30,
					size:80
				}));
```
