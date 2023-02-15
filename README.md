# rstring
Generate a random string.

## Installation
You can download the `rstring.exe` directly OR you can do the following;
```shell
$ git clone https://github.com/scottricity/rstring.git
$ cd rstring
$ pkg .
```
Rename `rstring-win.exe` to `rstring.exe` and there you go.

## How to

`$ rstring [size]`
- If `size` is omitted, it will choose a random size between 12 and 30, or else it will be the size entered
- Will generate a random string

`$ rstring [size] [args]`
- Args include;
<table>
<tr>
<td><code>-l</code></td>
<td>Include lower case letters</td>
<td>abcdefghijklmnopqrstuvwxyz</td>
</tr>
<tr>
<td><code>-u</code></td>
<td>Include upper case letters</td>
<td>ABCDEFGHIJKLMNOPQRSTUVWXYZ</td>
</tr>
<tr>
<td><code>-n</code></td>
<td>Include numbers</td>
<td>1234567890</td>
</tr>
<tr>
<td><code>-s</code></td>
<td>Include special characters</td>
<td>!@#$%^&*(){}`~/;.</td>
</tr>
</table>


## Usage
### ⚠️ **Results are random.**
```shell
$ rstring
Result: ZaPNTx@0k&.tyleXI9.n~5/.BB$.nW

$ rstring 26
Result: ~OM!D.{Zanqi4M.A*rko)NQwG#

$ rstring 26 -l
Result: ayhwzacflnvulujcatrdekhcud
```
