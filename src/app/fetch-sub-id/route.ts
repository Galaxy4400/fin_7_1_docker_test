// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(req: NextRequest) {
// 	const token = process.env.TRACKER_TOKEN;

// 	// Проверка на локальную среду
// 	const ip = process.env.NODE_ENV === 'development' ? 'local' : getClientIp(req);

// 	if (ip === 'local') {
// 		return NextResponse.json({ subid: 'local' });
// 	}

// 	// Сбор параметров
// 	const url = new URL(req.url);
// 	const query = Object.fromEntries(url.searchParams.entries());

// 	const params: Record<string, any> = {
// 		token,
// 		method: 'POST',
// 		ip,
// 		server: { remote_addr: ip },
// 		headers: {},
// 		force_redirect_offer: 1,
// 	};

// 	// Проброс subid параметров
// 	for (const [key, value] of Object.entries(query)) {
// 		if (/^(sub_?id\d*|_?subid\d*)$/i.test(key)) {
// 			params[key] = value;
// 		}
// 	}

// 	// Заголовки
// 	const headers = Object.fromEntries(req.headers.entries());
// 	for (const [name, value] of Object.entries(headers)) {
// 		if (!['connection', 'client-ip', 'x-forwarded-for'].includes(name.toLowerCase())) {
// 			params.headers[name.toLowerCase()] = value;
// 		}
// 	}

// 	// Принудительные заголовки
// 	params.headers['x-real-ip'] = ip;
// 	params.headers['x-forwarded-for'] = ip;
// 	params.headers['user-agent'] = headers['user-agent'] || 'Mozilla/5.0';

// 	// Запрос в трекер
// 	const resp = await fetch('https://trckit.net/click_api/v3', {
// 		method: 'POST',
// 		body: new URLSearchParams(params as Record<string, string>),
// 	});

// 	const data = await resp.json();

// 	return NextResponse.json({
// 		subid: data.cookies?._subid || null,
// 	});
// }

// function getClientIp(req: NextRequest) {
// 	const forwarded = req.headers.get('x-forwarded-for');
// 	if (forwarded) return forwarded.split(',')[0].trim();

// 	const realIp = req.headers.get('x-real-ip');
// 	if (realIp) return realIp;

// 	return req.ip || '127.0.0.1';
// }
