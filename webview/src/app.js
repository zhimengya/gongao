import Listeners from './listener/';
import AntPathMatcherBuilder from 'ant-pattern-matcher';

if (!window.hasOwnProperty('jQuery')) {
    throw '不包含jQuery不执行';
}

const AntPathMatcher = new AntPathMatcherBuilder().create();

const url = location.href;

for (const listener of Listeners) {
    for (const e of listener.match) {
        if (AntPathMatcher.isMatch(e, url)) {
            listener.process();
            break;
        }
    }
}

