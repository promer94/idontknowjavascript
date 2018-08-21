const a = [1, 2, 3]
const b = [4]
const c = a.concat[b]
c[0] = 5
c[3] = 6
// c = [5,2,3,6] a=[1,2,3] b=[4]

const d = [[1, 2]]
const e = [[3, 4]]
const f = d.concat[e]
f[0][0] = 2
e[1][0] = 4
// f=[[2,2],[4,4]]  d=[2,2] e =[4,4]

/**
 * Array.prototype.concat()
 * strings('a') number(1) boolean(true) will copy value into new array
 * Object reference will only copy the reference
 */
