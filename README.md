# 和谐加解密

使用自定义字典对字符串进行加解密

## 安装

> `npm i hexie-encode`

## 在线使用

> [https://wheatup.github.io/#/hexie](https://wheatup.github.io/#/hexie)

### 用社会主义核心价值观对字符串进行对称加解密

```javascript
import { encode, decode } from 'hexie-encode';

// 公正公正友善敬业文明友善敬业敬业友善敬业敬业友善诚信民主友善自由富强友善文明诚信友善诚信敬业友善诚信民主友善诚信自由友善敬业敬业友善敬业民主友善和谐富强友善文明诚信友善民主自由文明诚信和谐友善民主公正文明和谐法治友善民主自由富强文明和谐友善文明富强公正民主敬业友善自由平等富强平等法治
encode('Hello, world! 你好世界！');

// Hello, world! 你好世界！
decode('公正公正友善敬业文明友善敬业敬业友善敬业敬业友善诚信民主友善自由富强友善文明诚信友善诚信敬业友善诚信民主友善诚信自由友善敬业敬业友善敬业民主友善和谐富强友善文明诚信友善民主自由文明诚信和谐友善民主公正文明和谐法治友善民主自由富强文明和谐友善文明富强公正民主敬业友善自由平等富强平等法治');
```

### 并且可以使用自定义的字典进行加解密

> 字典的复杂度越高，密文就越短

```javascript
import { encode, decode } from 'hexie-encode';

const dict = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '☺️', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏', '😒', '😞', '😔'];

// 😄😄😔😄🥳😔😁😁😔😁😁😔😁😂😔😃😊😔😏😔😁😌😔😁😂😔😁😊😔😁😁😔😄🤩😔😒😔😏😔🥰😚😚😔😗😜😙😔🥰🙂😅😔😜😘😒😔😃😗😇😂
encode('Hello, world! 你好世界！', dict);

// Hello, world! 你好世界！
decode('😄😄😔😄🥳😔😁😁😔😁😁😔😁😂😔😃😊😔😏😔😁😌😔😁😂😔😁😊😔😁😁😔😄🤩😔😒😔😏😔🥰😚😚😔😗😜😙😔🥰🙂😅😔😜😘😒😔😃😗😇😂', dict);
```